from django.db import models
from django.shortcuts import reverse
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User
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

class Product(models.Model):

    name = models.CharField(max_length=100, null=False)
    picture = models.FileField(upload_to='Releases')
    price = models.IntegerField()
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

class BillingAddress(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    street_address = models.CharField(max_length=240)
    country = models.CharField(max_length=250, default='Nigeria')
    city = models.CharField(max_length=250)
    state = models.CharField(max_length=240)
    zip = models.IntegerField()

    def get_absolute_url(self):
        return reverse('paradise:checkout')

    def __str__(self):
        return self.street_address

class OrderProduct(models.Model):
    # Extending the Product model to create nother model with all the product
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
    user = models.OneToOneField(User, on_delete=models.CASCADE, )
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

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    image = models.ImageField(upload_to='Profile Pictures/')
    firstname = models.CharField(max_length=250)
    lastname = models.CharField(max_length=250)
    gender = models.CharField(max_length=250, choices=GENDER)
    slug = models.SlugField(unique=True)
  
    def get_absolute_url(self):
        return reverse('paradise:profile', kwargs={'slug':self.slug})


    def __str__(self):
        return f'{self.user} Profile'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(f'{self.user}')
        return super().save(*args, **kwargs)


   

