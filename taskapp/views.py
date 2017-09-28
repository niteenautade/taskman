''' from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from taskapp.models import Task
from taskapp.serializers import TaskSerializer


@api_view(['GET', 'POST'])
def task_list(request):
    """
    List all Tasks, or create a new Task.
    """
    if request.method == 'GET':
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) '''

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
        print("sssssssssss")
        id = self.kwargs['id']
        print("IDDDD:",id)
        return Task.objects.filter(user=id)
    

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer