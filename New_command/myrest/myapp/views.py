from django.shortcuts import render
from rest_framework import viewsets
from .models import Book
from .serializer import Bookserializer
# Create your views here.
class Bookviewstate(viewsets.ModelViewSet):
    queryset=Book.objects.all()
    book=Bookserializer