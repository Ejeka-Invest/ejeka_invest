from rest_framework_jwt import views as jwt_views
from djoser import views as djoser_views
from django.conf.urls import re_path
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import UserPortfolioListCreateView, UserPortfolioDetailView
from . import get_user
from . import views

urlpatterns = [
    path('all-profiles', UserPortfolioListCreateView.as_view(),
         name='all-profiles'),
    path('profile/<int:pk>/', UserPortfolioDetailView.as_view(), name='profile'),
    path('get-user/', get_user.ExampleView.as_view()),

    # Views are defined in Djoser, but we're assigning custom paths.
    re_path(r'^user/view/$',
            djoser_views.UserViewSet.as_view({'get': 'list'}), name='user-view'),
    re_path(r'^user/delete/$', djoser_views.UserViewSet.as_view({'delete': 'destroy'}),
            name='user-delete'),
    re_path(r'^user/create/$', djoser_views.UserViewSet.as_view({'post': 'create'}),
            name='user-create'),
    # Views are defined in Rest Framework JWT, but we're assigning custom paths.
    re_path(r'^user/login/$', jwt_views.ObtainJSONWebToken.as_view(),
            name='user-login'),
    re_path(r'^user/login/refresh/$',
            jwt_views.RefreshJSONWebToken.as_view(), name='user-login-refresh'),
]

