from django.urls import path
from reviews import views

app_name = 'address'
urlpatterns = [
    path('', views.CreateReview.as_view(), name='create'),
  
]
