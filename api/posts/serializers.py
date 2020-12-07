# Rest-Framework
from rest_framework import serializers
# Models
from posts.models import Post
from django.contrib.auth.models import User
from users.serializers import UserSerializer, ProfileSerializer
from users.models import Profile
from posts.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    profileId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Profile.objects.all(), source='profile')

    class Meta:
        model = Comment
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    user_name = serializers.ReadOnlyField(source='user.username')
    profile = ProfileSerializer(read_only=True)
    profileId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Profile.objects.all(), source='profile')
    comments = CommentSerializer(many=True, read_only=True, source='comment_set')
    # user = UserSerializer(no_required=True)
    # user = UserSerializer(source='user.username')
    # user = serializers.PrimaryKeyRelatedField(write_only=True, queryset=User.objects.all(), required=True)
      # profile = serializers.ReadOnlyField(source='s')
#     user = serializers.PrimaryKeyRelatedField(
#     many=False,
#     queryset=User.objects.all(), source='user.username',
   
# ) user = UserSerializer()

    # def create(self, validated_data):
    #     profile_data = validated_data.pop('user')
    #     user = User.objects.create(**profile_data)
    #     # for profile_data in profile_data:
    #     Post.objects.create(user=user, **validated_data)
    #     return user

    class Meta:
        model = Post
        fields = '__all__'
        

    # def create(self, validated_data):
    #     user_dict = validated_data.pop('user')
    #     user_obj = User.objects.create(**validated_data)
    #     Post.objects.create(user=user_obj, **user_dict)
    #     return user_obj

# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     # profiles = serializers.HyperlinkedRelatedField(many=True, view_name='profile-detail', read_only=True)

#     class Meta:
#         model = User
#         fields = ['url', 'id', 'username']    
    # def get_context_data(self, **kwargs):
    #     """Add user and profile to context."""
    #     context = super().get_context_data(**kwargs)
    #     context['user'] = self.request.user
    #     context['profile'] = self.request.user.profile
    #     return context
