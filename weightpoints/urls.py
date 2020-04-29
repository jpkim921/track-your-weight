# use the router from rest_framework since it's going to be an API server

from rest_framework import routers
from .api import WeightPointViewSet

router = routers.DefaultRouter()
router.register('api/weightpoints', WeightPointViewSet, 'weightpoints')

urlpatterns = router.urls
