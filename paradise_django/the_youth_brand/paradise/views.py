from django.shortcuts import render
from django.views.generic import TemplateView, CreateView, ListView, DeleteView, UpdateView, DetailView
# Create your views here.
from paradise import models
from paradise import forms
from django.urls import reverse_lazy


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
