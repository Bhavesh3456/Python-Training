from django.db import models

# Create your models here.
class User(models.Model):
    name=models.CharField(max_length=20)
    email=models.EmailField(max_length=20)
    mobile=models.CharField(max_length=10)
    password=models.CharField(max_length=12)
class Wishlist(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)