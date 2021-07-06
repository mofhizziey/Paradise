from rest_framework import routers
from .views import ProductViewSet, OrderViewSet, OrderProductViewSet

router = routers.DefaultRouter()
router.register(r'product', ProductViewSet)
router.register(r'order_product', OrderProductViewSet)
router.register(r'order', OrderViewSet)
