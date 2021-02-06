from django.contrib import admin

# Register your models here.
from paradise.models import Product, OrderProduct, Order, Profile, BillingAddress

admin.site.register(Product)
admin.site.register(OrderProduct)
admin.site.register(Order)
admin.site.register(Profile)
admin.site.register(BillingAddress)