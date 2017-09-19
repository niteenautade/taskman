from django.conf.urls import url,include
from django.contrib import admin
from django.contrib.staticfiles.views import serve
from django.views.generic import RedirectView
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', serve, kwargs={'path': 'index.html'}),
    url(r'^(?!/?static/)(?!/?media/)(?P<path>.*\..*)$',
    RedirectView.as_view(url='/static/%(path)s', permanent=False)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^task/',include('taskapp.urls'))
]
urlpatterns = format_suffix_patterns(urlpatterns)