from rest_framework import serializers
from taskapp.models import Task
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'taskTitle', 'user','reminderTime')

class TaskDetailedSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Task
        fields = ('id', 'taskTitle', 'user','reminderTime')

class TaskDetailedUserSpecificSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Task
        fields = ('id', 'taskTitle', 'user','reminderTime')