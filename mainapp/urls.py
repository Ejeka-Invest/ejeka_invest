from django.urls import path, re_path
from . import views, api_views


urlpatterns = [
    path('', views.current_user),
    path('logout/', views.logout, name='logout'),
    re_path(r'^_dashboard/', views._dashboard, name='_dashboard'),
    path('roi/', api_views.GetRoi),
    path('payment/', api_views.make_payment),
    path('savepayment/', api_views.savepayment_view),
    path('dashboard/', api_views.dashboard),
    path('investmentdetails/', api_views.investment_details),

]
