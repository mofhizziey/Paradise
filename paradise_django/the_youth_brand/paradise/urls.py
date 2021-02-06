from django.urls import path
from paradise import views

app_name = 'paradise'
urlpatterns = [
    path('product/create/', views.ProductCreateView.as_view(), name='create'),
    path('product/list/', views.ProductListView.as_view(), name='list'),
    path('product/update/<slug:slug>', views.ProductUpdateView.as_view(), name='update'),
    path('product/delete/<slug:slug>', views.ProductDeleteView.as_view(), name='delete'),
    path('product/detail/<slug:slug>', views.ProductDetailView.as_view(), name='detail'),
    path('add-to-cart/<slug:slug>', views.add_to_cart, name='add-to-cart'),
    path('remove-from-cart/<slug:slug>', views.remove_from_cart, name='remove-from-cart'),
    path('order-summary/', views.OrderSummaryView.as_view(), name='order-summary'),
    path('checkout', views.CheckOut.as_view(), name='checkout')
]
