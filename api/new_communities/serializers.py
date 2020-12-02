# Rest_Framework
from rest_framework import serializers
# Models
from .models import NewCommunity


class NewCommunitySerializer(serializers.ModelSerializer):
    interests = serializers.HyperlinkedRelatedField(many=True, view_name='community-detail', read_only=True)

    class Meta:
        model = NewCommunity
        fields = ['url', 'id', 'name', 'interests', 'picture', 'description', 'created', 'modified']
