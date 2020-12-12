# Rest_Framework
from rest_framework import serializers
# Models
from .models import NewCommunity
from users.models import Profile
from new_communities.models import JoinUser, Email
from activities.models import Activity
from users.serializers import ProfileSerializer
from activities.serializers import ActivitySerializer
from posts.serializers import PostSerializer
from posts_communities.serializers import PostCommunitySerializer



# class CommentSerializer(serializers.ModelSerializer):
#     profile = ProfileSerializer(read_only=True)
#     profileId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Profile.objects.all(), source='profile')

#     class Meta:
#         model = Comment
#         fields = '__all__'


# class PostSerializer(serializers.ModelSerializer):
#     user_name = serializers.ReadOnlyField(source='user.username')
#     profile = ProfileSerializer(read_only=True)
#     profileId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Profile.objects.all(), source='profile')
#     comments = CommentSerializer(many=True, read_only=True, source='comment_set')

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = '__all__'


class JoinUserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    profileId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Profile.objects.all(), source='profile')

    class Meta:
        model = JoinUser
        fields = '__all__'


class NewCommunitySerializer(serializers.ModelSerializer):
    # interests = serializers.HyperlinkedRelatedField(many=True, view_name='interest-detail', read_only=True)
    profile = ProfileSerializer(read_only=True)
    profileId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Profile.objects.all(), source='profile')
    activity = ActivitySerializer(read_only=True)
    activityId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Activity.objects.all(), source='activity')
    joinusers = JoinUserSerializer(many=True, read_only=True, source='joinuser_set')
    posts = PostSerializer(many=True, read_only=True, source='post_set')
    postscommunities = PostCommunitySerializer(many=True, read_only=True, source='postcommunity_set')
    # jUsersId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=JoinUser.objects.all(), source='comments')
    # # interest = serializers.StringRelatedField(many=True)
    # interestsId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Interest.objects.all(), source='interest')

    class Meta:
        model = NewCommunity
        fields = '__all__'

    # def create(self, validated_data):
    #     tracks_data = validated_data.pop('interest')
        
    #     interest = Interest.objects.create(**validated_data)
    #     for track_data in tracks_data:
    #         NewCommunity.objects.create(interest=interest, **track_data)
    #     return interest
