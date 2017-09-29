from taskapp.models import Task
from taskapp.serializers import TaskSerializer,TaskDetailedSerializer,TaskDetailedUserSpecificSerializer,UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User

class TaskList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskDetailedList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskDetailedSerializer

class TaskDetailedUserSpecificList(generics.ListCreateAPIView):
    serializer_class = TaskDetailedUserSpecificSerializer

    def get_queryset(self):
        id = self.kwargs['id']
        print("ID from TaskDetailedUserSpecificList:",id)
        return Task.objects.filter(user=id)
    

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer