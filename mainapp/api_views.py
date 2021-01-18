from rest_framework import generics
from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from django.core.serializers import serialize
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from accounts.serializers import UserPortfolioSerializer, DepositSerializer
from accounts.models import UserPortfolio, DepositModel
from .paystack import Base
from django.http import HttpResponse, HttpResponseRedirect
from urllib.parse import parse_qs
from accounts.maturity_date import add_months
from scripts.final_returns import get_final_returns
import urllib.parse as urlparse
import datetime

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetRoi(request):
    if request.method == 'GET':
        user = UserPortfolio.objects.filter(email=request.user)
        serializer = UserPortfolioSerializer(user, many=True)
        
        return Response(serializer.data[0])


def dashboard(request):
    if request.method == 'GET':
        user = UserPortfolio.objects.filter(email=request.user)
        serializer = UserPortfolioSerializer(user, many=True)

        return HttpResponse("Return to the dashboard page you created")


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def dashboard_view(request):

    amount = 0
    new_amount = 0
    roi = 0
    net_increase = 0
    balance = 0

    if request.method == 'GET':

        user = UserPortfolio.objects.filter(email=request.user)      
        deposit = DepositModel.objects.filter(user=user[0])
        deposit_serializer = DepositSerializer(deposit, many=True)

        sum_amount = deposit_serializer.data

        if deposit_serializer.data == []:
            amount=0
        else:
            amount = deposit_serializer.data[0]['amount']

        #print(request.data)
        
        return Response(amount)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def make_payment(request):
    
    if request.method == "POST":
        amount = request.data
        amount = str(int(amount['amount']) * 100)
        deposit = Base()

        url= deposit.make_payment(str(request.user.email), str(amount))
        #return HttpResponseRedirect()
        return Response(url)


@api_view()
@permission_classes([AllowAny])
def savepayment_view(request):

    date_today = datetime.date.today()
    mature_in_6_months = (add_months(date_today, 6))
    print(date_today, type(date_today),'today')
    print(mature_in_6_months, type(mature_in_6_months),'months')

    url = request.get_raw_uri()
    print(url)
    parsed = urlparse.urlparse(url)
    #txref = parse_qs(parsed.query)
    reference = parse_qs(parsed.query)['reference']
    print(reference)

    deposit = Base()
    payment_details = deposit.confirm_payment(" ".join(reference))
    
    if payment_details['data']['status'] == 'success':
        new_deposit = int(payment_details['data']['amount']/100)

        final_roi=get_final_returns(new_deposit, 15)
        print(repr(DepositModel.returns_on_investment))

        user = payment_details['data']['customer']['email']
        user_detail = UserPortfolio.objects.filter(email=user)      

        deposit = DepositModel.objects.filter(user=user_detail[0])
        deposit_serializer = DepositSerializer(deposit, many=True)

        sum_amount = deposit_serializer.data
        deposit_new_amount = DepositModel.objects.create(user=user_detail[0], 
                                                amount=new_deposit, 
                                                reference_number=str(reference[0]), 
                                                date_invested=date_today, 
                                                maturity_date=mature_in_6_months,
                                                         final_returns=final_roi)

        if deposit.exists():
            deposit_save = DepositModel.objects.filter(user=user_detail[0])
            total=0

            for amount in deposit_save:
                total +=int((str(amount)))
            print(total)
            user_detail.update(current_balance=total)

        else:
            user_detail.update(current_balance=new_deposit)

            
    return HttpResponseRedirect("/api/v1/main/dashboard/")



@permission_classes([IsAuthenticated])
class InvestmentDetails(generics.ListCreateAPIView):
    queryset = DepositModel.objects.all()
    serializer_class = DepositSerializer
    permission_Calsses = [IsAuthenticated]


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def investment_details(request):
    if request.method == 'GET':
        response_data_active = []
        response_data_matured = []
        response_data_all = []

        final_response={
            "active": response_data_active, 
            "matured": response_data_matured,
            "all": (response_data_active,response_data_matured)
        }

        user = DepositModel.objects.filter(user=request.user)
        print(request.data['mode'])
        serializer = DepositSerializer(user, many=True)
        data=0
        {'amount': 1000, 'date_invested': '2021-01-18', 'maturity_date': '2021-07-18'}
        if serializer.data == []:
            data = {'amount': 0, 'date_invested': '0',
                    'maturity_date': '0'}
        else:
            data=serializer.data[:]
            
            for details in data:
                maturity_date = datetime.datetime.strptime(
                    details['maturity_date'], '%Y-%m-%d').date()
                if datetime.date.today() != maturity_date:
                    
                    response_data_active.append(details) 
                if datetime.date.today() >= maturity_date:
                    response_data_matured.append(details)
            
        return Response(final_response)
