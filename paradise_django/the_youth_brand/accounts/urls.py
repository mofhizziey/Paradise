from django.urls import path
from accounts import views

app_name = 'address'
urlpatterns = [
    path('<slug:slug>', views.as_view(), name='create'),

]
