"""ejeka_invest URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    # react paths
    path("", csrf_exempt(TemplateView.as_view(template_name="index.html"))),
    path("about/", TemplateView.as_view(template_name="index.html")),
    path("getintouch/", TemplateView.as_view(template_name="index.html")),
    path("login/", csrf_exempt(TemplateView.as_view(template_name="index.html"))),
    path("signup/", csrf_exempt(TemplateView.as_view(template_name="index.html"))),
    path("dashboard/", csrf_exempt(TemplateView.as_view(template_name="index.html"))),

    # django paths
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('api/v1/main/', include('mainapp.urls')),
    path('api/v1/account/', include('accounts.urls')),

]
