from django.shortcuts import render
from .models import User
from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import redirect
import random
# Create your views here.
def index(request):
    return render(request,'index.html')
def signin(request):
    if request.method=="POST":
        try:
          User.objects.create(
            name=request.POST['name'],
            email=request.POST['email'],
            mobile=request.POST['mobile'],
            password=request.POST['password']
            )
          return render(request,'login.html')
        except:
            return render(request,'signin.html')
    else:
        return render(request,'signin.html')
def login(request):
    if request.method=="POST":
        try:
            user= User.objects.get(
            email=request.POST['email'],
            password=request.POST['password']

            )
            request.session['email']=user.email
            request.session['password']=user.password
            return render(request,'index.html')
        except: 
            return render(request,'login.html')
    else:
        return render(request,'login.html')
def sending(email,otp):
    message=f'Your OTP  is {otp}'
    subject="OTP Verification "
    email_from=settings.EMAIL_HOST_PASSWORD
    recipient_list=[email]
    send_mail(message,subject,email_from,recipient_list)
def otp(request):
    if request.method=="POST":
        email=request.POST.get('email')
        otp=random.randint(1000,9000)
        sending(email,otp)
        request.session['otp']=otp
        return render(request,'verification.html')
    else:
        return render(request,'otp.html')
def verification(request):
    if request.method=="POST":
        otp=request.POST.get('otp')
        session_otp=request.session['otp']
        if int(otp)==session_otp:
            return redirect('newpassword')
        else:
            return redirect('verification')
    else:
        return render(request,'verification.html')
def viewpassword(request):
    if request.method=="POST":
        
        newp=request.POST.get('newpassword')
        cp=request.POST.get('confirmpassword')
        if int(newp)==int(cp):
            user=User.objects.get(mobile=request.POST['mobile'])
            user.password=newp
            user.save()
            return render(request,'login.html')
        else:
            return render(request,'viewpassword.html')
    else:
        return render(request,'newpassword.html')
