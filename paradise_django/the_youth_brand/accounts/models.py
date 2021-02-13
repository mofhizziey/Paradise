from django.db import models
from django.shortcuts import reverse
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User

GENDER = (
    ('M', 'M'),
    ('F', 'F')
)

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    image = models.ImageField(upload_to='Profile Pictures/')
    firstname = models.CharField(max_length=250)
    lastname = models.CharField(max_length=250)
    slug = models.SlugField(unique=True)
  
    def get_absolute_url(self):
        return reverse('paradise:profile', kwargs={'slug':self.slug})

    def __str__(self):
        return f'{self.user} Profile'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(f'{self.user}')
        return super().save(*args, **kwargs)
