from django.db import models

class Task(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    task = models.CharField(max_length=100, blank=True, default='')
    user = models.CharField(max_length=100, blank=True, default='')
    def __str__(self):
        return self.task+str(self.id)

    class Meta:
        ordering = ('created',)