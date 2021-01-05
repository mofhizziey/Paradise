from django import forms
from paradise.models import Product

class ProductViewForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'picture', 'price', 'size']
