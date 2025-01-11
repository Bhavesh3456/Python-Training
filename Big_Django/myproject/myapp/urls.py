
from django.urls import path
from . import views
urlpatterns = [
   path('index/',views.index,name='index'),
   path('',views.signin,name='signin'),
   path('login/',views.login,name='login'),
   path('otp/',views.otp,name='otp'),
   path('verification/',views.verification,name='verification'),
   path('viewpassword/',views.viewpassword,name='newpassword')
]

