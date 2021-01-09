from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
import json

class ExampleView(APIView):
    #authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        content = {
            # `django.contrib.auth.User` instance.
            'user': str(request.user),
            'auth': str(request.auth),  # None
        }
        return Response(content)
