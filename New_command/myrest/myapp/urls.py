from .views import Bookviewstate
from django.urls import path
from . import views
urlpatterns = [
    path('books/',views.Bookviewstate.as_view({'get':'list','post':'create'})),
    path('books/<int:pk>/',Bookviewstate.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
]

