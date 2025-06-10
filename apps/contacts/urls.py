from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from .views import contact_view

urlpatterns = [
    path('', csrf_exempt(contact_view), name='contact'),
]
