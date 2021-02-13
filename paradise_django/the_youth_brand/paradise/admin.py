from django.contrib import admin

# Register your models here.
from paradise.models import Product, OrderProduct, Order


admin.site.register(Product)
admin.site.register(OrderProduct)
admin.site.register(Order)
