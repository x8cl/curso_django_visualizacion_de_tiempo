from django.urls import path
from . import views

urlpatterns = [
    path('', views.time_display, name='index'),
    path("time_display", views.time_display, name="time"),
]
