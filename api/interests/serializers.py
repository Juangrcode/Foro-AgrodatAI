# Rest_Framework
from rest_framework import serializers
# Models
from .models import Interest
from new_communities.serializers import NewCommunitySerializer

class InterestSerializer(serializers.ModelSerializer):
  
    class Meta:
        model = Interest
        fields = '__all__'
