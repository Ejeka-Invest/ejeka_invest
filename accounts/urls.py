from djoser import views as djoser_views
from django.conf.urls import re_path
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import UserPortfolioListCreateView, UserPortfolioDetailView
from . import get_user
from . import views

"""
urlpatterns = [
    path('all-profiles', UserPortfolioListCreateView.as_view(),
         name='all-profiles'),
    path('profile/<int:pk>/', UserPortfolioDetailView.as_view(), name='profile'),
    path('get-user/', get_user.ExampleView.as_view()),

]

"""

urlpatterns =[
    #path('activate/<str:uid>/<str:token>/', views.ActivateUserByGet.as_view()),
    path('activate/<str:uid>/<str:token>/', views.ActivateUser.as_view()),

]
