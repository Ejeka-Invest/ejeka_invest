from rest_framework.response import Response
from rest_framework import views, permissions, status
import uuid
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from accounts.models import DepositModel
from .forms import DepositForm
from .paystack import Base
import urllib.parse as urlparse
from urllib.parse import parse_qs

from accounts.models import jwt_get_secret_key

# Create your views here.
def current_user(request):
    user=request.user
    print(user.roi, user.jwt_secret)
    
    return HttpResponse(str(user))


"""
User Portfolio
•	Total Amount Invested 500,000
•	ROI/mo 10%
•	Current Balance (Net increase + total amount Invested)
•	Net Increase-difference between the amount you invested and the increase

"""

def dashboard(request):
    #amount=DepositModel.objects.all()
    #sum_amount = DepositModel.totalamount.filter(user=request.user)
    sum_amount = DepositModel.objects.filter(user=request.user)
    new_amount = 0
    roi=0
    net_increase=0
    balance=0

    if sum_amount:
        for i in sum_amount:
            new_amount = sum_amount
    else:
        sum_amount = 0

    print(new_amount)

    """amount = summation of deposits - summation of all withdrawls"""
    return render(request, 'dashboard.html', context={"new_amount": new_amount, "roi": roi, "net_increase": net_increase, "balance":balance })


def payment(request):
    if request.method == "POST":
        form = DepositForm(request.POST)
        if form.is_valid():
            amount = str(int(form.cleaned_data['amount']) * 100)
            deposit = Base()

            return HttpResponseRedirect(deposit.make_payment(str(request.user.email), str(amount)))
    else:
        form = DepositForm()

    return render(request, 'payment.html', context={"form": form})

def logout(request):
    return HttpResponse('logout')


def _dashboard(request):

    amount = DepositModel.objects.filter(user=request.user)
    #sum_amount = DepositModel.totalamount.all()

    """amount = summation of deposits - summation of all withdrawls"""

    url = request.get_raw_uri()
    print(url)
    parsed = urlparse.urlparse(url)
    txref = parse_qs(parsed.query)['trxref']
    reference = parse_qs(parsed.query)['reference']
    print(txref, reference)

    deposit = Base()
    payment_details = deposit.confirm_payment(" ".join(txref))
    #print(payment_details)
    #value_new=0

    def return_amount(request, value):
        for money in DepositModel.objects.filter(user=request.user):
            #print("this is the money",money)

            print(money, "True")
            #value_new = value+i
            print(int(str(money)))
            value_new = int(str(money))+value/100
            print("this is the new value: ", value_new)

            print("this is the new value: ", value_new)
            DepositModel.objects.filter(
                user=request.user).update(amount=value_new)

            print(money)

    money_in_account = False
    for keys, values in dict(payment_details).items():

        sum_amount = DepositModel.objects.filter(user=request.user)

        if "data" in keys:
            for key, value in values.items():
                if "amount" in key:
                    if sum_amount.exists():

                        for money in DepositModel.objects.filter(user=request.user):

                            print(money, "True")
                            #value_new = value+i
                            print(int(str(money)))
                            value_new = int(str(money))+value/100
                            print("this is the new value: ", value_new)

                            print("this is the new value: ", value_new)
                            DepositModel.objects.filter(
                                user=request.user).update(amount=value_new)
                            break

                    else:

                        deposit_amount = DepositModel()
                        deposit_amount.user = request.user
                        deposit_amount.amount = int(value/100)
                        print(deposit_amount.amount)
                        deposit_amount.save()




                    print(value)

                    """
                            print(money, "False")
                            deposit_amount = DepositModel()
                            deposit_amount.user = request.user
                            deposit_amount.amount = int(value/100)
                            print(deposit_amount.amount)
                            deposit_amount.save()
                            """

                    #break
                    break

                    if money_in_account:
                        print('doing')
                        for money in DepositModel.objects.filter(user=request.user):
                            if money:
                                print(money, "True")
                                #value_new = value+i
                                print(int(str(money)))
                                value_new = int(str(money))+value/100
                                print("this is the new value: ", value_new)

                                print("this is the new value: ", value_new)
                                DepositModel.objects.filter(
                                    user=request.user).update(amount=value_new)
                                break
                    else:

                        deposit_amount = DepositModel()
                        deposit_amount.user = request.user
                        deposit_amount.amount = int(value/100)
                        print(deposit_amount.amount)
                        deposit_amount.save()

                    break

    return render(request, 'payment_successful_dashboard.html', context={"amount": sum_amount})

