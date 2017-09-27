from django.conf.urls import url,include
from django.contrib import admin
from django.contrib.staticfiles.views import serve
from django.views.generic import RedirectView
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls.static import static
from django.conf import settings

''' urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', serve, kwargs={'path': 'index.html'}),
    url(r'^(?!/?static/)(?!/?media/)(?P<path>.*\..*)$',
    RedirectView.as_view(url='/static/%(path)s', permanent=False)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^task/',include('taskapp.urls')),
    url(r'^jwt-auth/', obtain_jwt_token),
] '''
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^taskapp/',include('taskapp.urls')),
    url(r'^auth', obtain_jwt_token)
]
urlpatterns = format_suffix_patterns(urlpatterns)