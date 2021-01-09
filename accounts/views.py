from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from .models import UserPortfolio
from .permissions import IsOwnerProfileOrReadOnly
from .serializers import UserPortfolioSerializer
from rest_framework import authentication, permissions
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.decorators import api_view  
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import (
    login as django_login,
    logout as django_logout
)
from django.conf import settings
from rest_framework import status
import uuid
from rest_framework import views, permissions, status
# Create your views here.


class UserPortfolioListCreateView(ListCreateAPIView):
    queryset=UserPortfolio.objects.all()
    serializer_class = UserPortfolioSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)

    


class UserPortfolioDetailView(RetrieveUpdateDestroyAPIView):
    """adjust this api view to only accept uuid for querying instead of pk or id"""

    queryset =  UserPortfolio.objects.all()
    serializer_class = UserPortfolioSerializer
    permission_Calsses = [IsOwnerProfileOrReadOnly, IsAuthenticated]

