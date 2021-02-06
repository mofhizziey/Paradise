from django import forms
from paradise.models import Product, BillingAddress

class ProductViewForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'picture', 'price', 'size']


class CheckOutForm(forms.Form):
    billing_address = forms.CharField()
    country = forms.CharField()
    city = forms.CharField()
    state = forms.CharField()
    zip = forms.IntegerField()
    same_billing_address = forms.BooleanField(widget=forms.CheckboxInput())
    save_info = forms.BooleanField(widget=forms.CheckboxInput())
    payment_option = forms.BooleanField(widget=forms.RadioSelect())

class CheckOutModelForm(forms.ModelForm):

    class Meta:
        model = BillingAddress
        fields = ['street_address', 'city', 'state', 'zip', 'country']
        
        