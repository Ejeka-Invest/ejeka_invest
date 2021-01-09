from django.contrib import admin
from .models import UserPortfolio, DepositModel, ReturnsOnInvestments
# Register your models here.
admin.site.register(UserPortfolio)
admin.site.register(DepositModel)
admin.site.register(ReturnsOnInvestments)
