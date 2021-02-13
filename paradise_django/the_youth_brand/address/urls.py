from django.urls import path
from address import views

app_name = 'address'
urlpatterns = [
    path('', views.CheckOutView.as_view(), name='checkout'),
]
