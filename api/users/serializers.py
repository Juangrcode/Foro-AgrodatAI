# Django
from django.contrib.auth.models import User

# Rest-framework
from rest_framework import serializers

# Models
from users.models import Profile
# from users.serializers import UserSerializer

class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    # interests_name = serializers.ReadOnlyField(source='interests.name')
    # user = UserSerializer()
    # interests = serializers.HyperlinkedRelatedField(many=True, view_name='interest-detail', read_only=True)
    # communities = serializers.HyperlinkedRelatedField(many=True, view_name='community-detail', read_only=True)

    class Meta:
        model = Profile
        # fields = ['url', 'id', 'user','interests_user', 'picture','created','modified']
        fields = '__all__'


class UserSerializer(serializers.HyperlinkedModelSerializer):
    # profiles = serializers.HyperlinkedRelatedField(many=True, view_name='profile-detail', read_only=True)

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'profile']
