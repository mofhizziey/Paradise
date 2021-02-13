from django.db import models
from django.shortcuts import reverse
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User
from accounts.models import Profile



# Create your models here.
class ProductReviews(models.Model):
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE)
    review = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    ratings = models.CharField(max_length=100, null=False)
    def __str__(self):
        return f'{self.user} Product reviews'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(f'{self.profile}')
        return super().save(*args, **kwargs)


