# Rest_Framework
from rest_framework import serializers

from .models import Common

class CommonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Common
        fields = '__all__'
