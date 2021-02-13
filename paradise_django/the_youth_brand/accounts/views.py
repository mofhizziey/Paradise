from django.shortcuts import render
from django.views.generic import TemplateView, View, ListView, DetailView, UpdateView
from .models import Profile
# Create your views here.
class ProfileView(DetailView):
    model = Profile
    template_name = 'account/profile.html'
