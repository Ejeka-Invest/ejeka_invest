from rest_framework import serializers
from .models import UserPortfolio, DepositModel


class UserPortfolioSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = UserPortfolio
        fields ='__all__'


class DepositSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = DepositModel
        fields = ['amount', 'date_invested',
                  'maturity_date', 'returns_on_investment', 'final_returns']
