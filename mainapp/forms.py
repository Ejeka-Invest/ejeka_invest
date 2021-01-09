from django import forms


class DepositForm(forms.Form):
    amount = forms.CharField(max_length=100)
