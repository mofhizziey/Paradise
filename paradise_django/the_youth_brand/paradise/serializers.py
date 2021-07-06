from rest_framework import serializers
from .models import Product, Order, OrderProduct
"""from django.conf import settings
User = settings.AUTH_USER_MODEL
"""

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = [
            'name', 'price'
        ]

class OrderProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OrderProduct
        fields = [
            'product', 'quantity'
        ]


class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = [
            'start_date'
        ]
