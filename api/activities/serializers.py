# Rest_Framework
from rest_framework import serializers

from activities.models import Activity
from interests.serializers import InterestSerializer

class ActivitySerializer(serializers.ModelSerializer):

    interests = InterestSerializer(many=True, read_only=True, source='interest_set')
    
    class Meta:
        model = Activity
        fields = '__all__'
