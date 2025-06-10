from django.urls import path
# Ya no necesitas csrf_exempt importado aquí si lo aplicas en la vista
from .views import ContactAPIView # <-- Importa la vista basada en clase

urlpatterns = [
    path('', ContactAPIView.as_view(), name='contact'), # <-- Llama a .as_view()
]