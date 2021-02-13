from django.shortcuts import render
from django.views.generic import TemplateView, CreateView
# Create your views here.
from reviews.models import ProductReviews


class CreateReview(CreateView):
    model = ProductReviews
    template_name = ''