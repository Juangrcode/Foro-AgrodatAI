# Rest-Framework
from rest_framework import serializers
# Models
from posts.models import Post


class PostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Post
        fields = ['url', 'id', 'owner',
                  'timestamp', 'content']
