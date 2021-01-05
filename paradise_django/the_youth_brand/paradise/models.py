from django.db import models
from django.shortcuts import reverse
from django.template.defaultfilters import slugify
# Create your models here.
SIZES = (
    ('S', 'S'),
    ('L', 'L'),
    ('M', 'M'),
    ('XL', 'XL'),
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

    def __str__(self):
        return f'{self.name} {self.size}'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(f'{self.name} {self.size}')
        return super().save(*args, **kwargs)
