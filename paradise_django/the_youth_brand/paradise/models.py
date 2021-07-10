from django.db import models
from django.shortcuts import reverse
from django.template.defaultfilters import slugify

from address.models import BillingAddress
from django.conf import settings
User = settings.AUTH_USER_MODEL


# Create your models here.
SIZES = (
    ('S', 'S'),
    ('L', 'L'),
    ('M', 'M'),
    ('XL', 'XL'),
)

GENDER = (
    ('M', 'M'),
    ('F', 'F')
)

PAYMENT_CHOICES = (
    ('Paystack', 'Paystack'),
    ('Remita', 'Remita'),
    ('Paypal', 'Paypal')
)

PRODUCT_COLOR_CHOICES = (
    ('Black', 'Black'),
    ('White', 'White'),
    ('Red', 'Red'),
    ('Yellow', 'Yellow'),
    ('Green', 'Green'),
    ('Blue', 'Blue'),

)

class Product(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=100, null=False)
    picture = models.FileField(upload_to='Releases')
    price = models.IntegerField()
    color = models.CharField(max_length=100, null=True, blank=True,  choices=PRODUCT_COLOR_CHOICES)
    details = models.CharField(max_length=100, null=True)
    size = models.CharField(max_length=100, null=False)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    slug = models.SlugField(null=False, unique=True)

    def get_absolute_url(self):
        return reverse('paradise:detail', kwargs={'slug':self.slug})

    def get_add_to_cart_url(self):
        return reverse('paradise:add-to-cart', kwargs={'slug':self.slug})

    def get_remove_from_cart_url(self):
        return reverse('paradise:remove-from-cart', kwargs={'slug':self.slug})

    def __str__(self):
        return f'{self.name}'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(f'{self.name} {self.size}')
        return super().save(*args, **kwargs)


class OrderProduct(models.Model):
    # Extending the Product model to create another model with all the product
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(null=True, default=1)
    ordered = models.BooleanField(default=False)

    def get_total_product_price(self):
        return self.quantity * self.product.price

    def get_final_price(self):
        return self.get_total_product_price()

    def __str__(self):
        return f'{self.quantity} pcs of {self.product}'

class Order(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    start_date = models.DateTimeField(auto_now_add=True)
    order_date = models.DateTimeField()
    products = models.ManyToManyField(OrderProduct)
    ordered = models.BooleanField(default=False)
    billing_address =  models.ForeignKey(BillingAddress, on_delete=models.SET_NULL, blank=True, null=True)

    def get_total(self):
        total = 0
        for product_order in self.products.all():
            total += product_order.get_final_price()
        return total


    def __str__(self):
        return f'New order: {self.user} has made an order!'
