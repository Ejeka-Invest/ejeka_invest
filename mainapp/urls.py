from django.urls import path, re_path
from . import views, api_views


urlpatterns = [
    path('', views.current_user),
    #path('dashboard/', views.dashboard, name='dashboard'),
    #path('payment/', views.payment, name='payment'),
    path('logout/', views.logout, name='logout'),
    re_path(r'^_dashboard/', views._dashboard, name='_dashboard'),
    path('roi/', api_views.GetRoi),
    path('api/dashboard/', api_views.dashboard_view),
    path('api/payment/', api_views.make_payment),
    path('savepayment/', api_views.savepayment_view),
    path('dashboard/', api_views.dashboard),
    path('investmentdetails/', api_views.InvestmentDetails.as_view()),

]
