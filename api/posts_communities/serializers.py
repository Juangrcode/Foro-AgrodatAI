# Rest-Framework
from rest_framework import serializers
# Models
from posts_communities.models import PostCommunity
from django.contrib.auth.models import User
from users.serializers import UserSerializer, ProfileSerializer
from posts_communities.models import CommentCommunity
from users.models import Profile
from activities.serializers import ActivitySerializer
# from interests.serializers import InterestSerializer
from activities.models import Activity


class CommentCommunitySerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    profileId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Profile.objects.all(), source='profile')

    class Meta:
        model = CommentCommunity
        fields = '__all__'


class PostCommunitySerializer(serializers.ModelSerializer):
    user_name = serializers.ReadOnlyField(source='user.username')
    profile = ProfileSerializer(read_only=True)
    profileId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Profile.objects.all(), source='profile')
    commentscommunities = CommentCommunitySerializer(many=True, read_only=True, source='commentcommunity_set')
    activity = ActivitySerializer(read_only=True)
    activityId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Activity.objects.all(), source='activity')
    # activities = ActivitySerializer(many=True, read_only=True, source='activity_set')
    # interest = InterestSerializer(many=True, read_only=True, source='interest_set')

    class Meta:
        model = PostCommunity
        fields = '__all__'
        
