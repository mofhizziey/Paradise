from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import TemplateView, CreateView, ListView, DeleteView, UpdateView, DetailView, View
# Create your views here.
from django.core.exceptions import ObjectDoesNotExist
from paradise import models
from django.contrib import messages
from paradise import forms
from django.urls import reverse_lazy
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from django.contrib.auth.mixins import LoginRequiredMixin

from paradise.forms import CheckOutForm

class IndexView(TemplateView):
    template_name = 'paradise/index.html'

class MenuView(TemplateView):
    template_name = 'paradise/menu.html'

class ProductCreateView(CreateView):
    template_name = 'paradise/product_create.html'
    fields = ('name', 'picture', 'price', 'size')
    model = models.Product

class ProductListView(ListView):
    template_name = 'paradise/product_list.html'
    model = models.Product

class ProductUpdateView(UpdateView):
    fields = ('name', 'picture', 'price', 'size')
    template_name = 'paradise/product_edit.html'
    model = models.Product

class ProductDeleteView(DeleteView):
    template_name = 'paradise/product_delete.html'
    model = models.Product
    success_url = reverse_lazy('paradise:detail')

class ProductDetailView(DetailView):
    template_name = 'paradise/product_detail.html'
    model = models.Product


def add_to_cart(request, slug):
    # get product
    product = get_object_or_404(models.Product, slug=slug)
    # get or create product order
    product_order, created = models.OrderProduct.objects.get_or_create(
        product=product,
        #user=request.user,
        ordered=False
        )
    # Query through Orders that have not been completed yet
    order_qs = models.Order.objects.filter(user=request.user, ordered=False)

    # for Orders that has not been completed yet and exists
    if order_qs.exists():
        # get order
        order = order_qs[0]
        # check if the product order is in the order
        if order.products.filter(product__slug=product.slug).exists():
            # if product order is in order add to quantity of the product order
            product_order.quantity += 1
            # save the product order
            product_order.save()
            messages.info(request, f'{product.name} quantity has been updated to {product_order.quantity} pcs ')
        else:
            messages.success(request, f'{product.name} was added to your cart')
            order.products.add(product_order)

    else:
        messages.warning(request, 'You do not have an active order! ')
        # create a new order 
        order_date = timezone.now()
        order = models.Order.objects.create(user=request.user, order_date=order_date)
        # add products to order
        order.products.add(product_order)
    return redirect('paradise:detail', slug=slug)


def remove_from_cart (request, slug):
    # get product
    product = get_object_or_404(models.Product, slug=slug)
 
    # Query through Orders that have not been completed yet
    order_qs = models.Order.objects.filter(
        user=request.user,
        ordered=False)

    # for Orders that has not been completed yet and exists
    if order_qs.exists():
        # get order
        order = order_qs[0]
        # check if the product order is in the order
        if order.products.filter(product__slug=product.slug).exists():
            product_order = models.OrderProduct.objects.filter(
                product=product,
                #user=request.user,
                ordered=False

            )[0]
            order.products.remove(product_order)
            messages.warning(request, f'{product.name} was removed from your cart')
        else:
            return redirect('paradise:remove-from-cart', slug=slug)

    else:
        messages.warning(request, 'You do not have an active order! ')
        return redirect('paradise:remove-from-cart', slug=slug)
    return redirect('paradise:detail', slug=slug)




class OrderSummaryView(LoginRequiredMixin, View):
    def get(self, *args, **kwargs):
        try:
            order = models.Order.objects.get(user=self.request.user, ordered=False)
            context = {'object':order}
            return render(self.request, 'paradise/order_summary.html', context)
        except ObjectDoesNotExist:
            messages.error(self.request, 'You do not have an active rorder')
            return redirect('/') 

class CheckOutView(LoginRequiredMixin, View):
    def get(self, *args, **kwargs):
        form = CheckOutForm()
        context = {
            'form':form
         }
        return render(self.request, 'paradise/checkout.html', context)


    def post(self, *args, **kwargs):
        form = CheckOutForm(self.request.POST or None)
        context = {
            'form':form
         }
        try:
            order = models.Order.objects.get(user=self.request.user, ordered=False)
            if form.is_valid():
                billing_address = models.BillingAddress(
                    user=self.request.user,
                    street_address=street_address,
                    country=country,
                    zip=zip
                )
                billing_address.save()
                print('Form is valid')
                return redirect('paradise:checkout')
            else:
                print('form is invalid')
        except ObjectDoesNotExist:
            messages.error(self.request, 'You do not have an active order')
            return redirect('paradise:checkout') 
        return render(self.request, 'paradise/checkout.html', context)

        
class CheckOut(CreateView):
    model = models.BillingAddress
    fields = ['street_address', 'city', 'state', 'zip', 'country']
    template_name = 'paradise/checkout.html'