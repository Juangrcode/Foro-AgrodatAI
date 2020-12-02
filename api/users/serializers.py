# Django
from django.contrib.auth.models import User

# Rest-framework
from rest_framework import serializers

# Models
from users.models import Profile


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    interests = serializers.HyperlinkedRelatedField(many=True, view_name='interest-detail', read_only=True)
    communities = serializers.HyperlinkedRelatedField(many=True, view_name='community-detail', read_only=True)

    class Meta:
        model = Profile
        fields = ['url', 'id', 'owner',
                  'picture', 'interests', 'communities']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    profiles = serializers.HyperlinkedRelatedField(many=True, view_name='profile-detail', read_only=True)

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'profiles']