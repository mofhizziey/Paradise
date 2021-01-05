from django.urls import path
from paradise import views

app_name = 'paradise'
urlpatterns = [
    path('product/create/', views.ProductCreateView.as_view(), name='create'),
    path('product/list/', views.ProductListView.as_view(), name='list'),
    path('product/update/<slug:slug>', views.ProductUpdateView.as_view(), name='update'),
    path('product/delete/<slug:slug>', views.ProductDeleteView.as_view(), name='delete'),
    path('product/detail/<slug:slug>', views.ProductDetailView.as_view(), name='detail'),
]
