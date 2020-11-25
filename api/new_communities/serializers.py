# Rest_Framework
from rest_framework import serializers

from .models import NewCommunity


class NewCommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = NewCommunity
        fields = '__all__'
