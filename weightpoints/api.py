from .models import WeightPoint
from rest_framework import viewsets, permissions
from .serializers import WeightPointSerializer

# WeightPoint ViewSet for CRUD actions


class WeightPointViewSet(viewsets.ModelViewSet):
    queryset = WeightPoint.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = WeightPointSerializer
