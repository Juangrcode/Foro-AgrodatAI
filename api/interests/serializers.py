# Rest_Framework
from rest_framework import serializers
# Models
from .models import Interest


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = '__all__'
