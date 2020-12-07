# Rest_Framework
from rest_framework import serializers
# Models
from .models import NewCommunity
from users.models import Profile
from activities.models import Activity
from users.serializers import ProfileSerializer
from activities.serializers import ActivitySerializer


class NewCommunitySerializer(serializers.ModelSerializer):
    # interests = serializers.HyperlinkedRelatedField(many=True, view_name='interest-detail', read_only=True)
    profile = ProfileSerializer(read_only=True)
    profileId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Profile.objects.all(), source='profile')
    activity = ActivitySerializer(read_only=True)
    activityId = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Activity.objects.all(), source='activity')
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
