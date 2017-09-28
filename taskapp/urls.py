from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url(r'^tasks$', views.TaskList.as_view()),
    url(r'^allTasksDetailed$', views.TaskDetailedList.as_view()),
    url(r'^allTasksDetailed/(?P<id>[0-9]+)$', views.TaskDetailedUserSpecificList.as_view()),
    url(r'^allUsers$', views.UserList.as_view()),
    
]