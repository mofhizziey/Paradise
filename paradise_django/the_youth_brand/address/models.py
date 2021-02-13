from django.db import models
from django.shortcuts import reverse
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User
# Create your models here.


class BillingAddress(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    street_address = models.CharField(max_length=240)
    country = models.CharField(max_length=250, default='Nigeria')
    city = models.CharField(max_length=250)
    state = models.CharField(max_length=240)
    zip_code = models.IntegerField()

    def get_absolute_url(self):
        return reverse('paradise:checkout')

    def __str__(self):
        return self.street_address