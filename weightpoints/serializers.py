from rest_framework import serializers
from .models import WeightPoint


# serializer for weightpoints. will convert data to send and receive json
class WeightPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeightPoint
        fields = '__all__'
