from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    taskTitle = models.CharField(max_length=100)
    user = models.ForeignKey(User)
    reminderTime = models.DateTimeField()
    def __str__(self):
        return 'id='+str(self.id)+' ... '+self.taskTitle