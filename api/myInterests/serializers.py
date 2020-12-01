# Rest_Framework
from rest_framework import serializers

from .models import MyInterest


class MyInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyInterest
        fields = '__all__'
