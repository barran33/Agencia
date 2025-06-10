from django.conf import settings
from django.core.mail import send_mail
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes
)
from rest_framework.permissions import AllowAny
from rest_framework.authentication import BasicAuthentication
from rest_framework.response import Response

# Importa tu autenticador sin CSRF
from .auth import CsrfExemptSessionAuthentication

@api_view(['POST'])
@authentication_classes([CsrfExemptSessionAuthentication, BasicAuthentication])
@permission_classes([AllowAny])
def contact_view(request):
    data = request.data
    nombre      = data.get('name')
    email       = data.get('email')
    telefono    = data.get('phone')
    asunto      = data.get('subject')
    presupuesto = data.get('budget')
    mensaje     = data.get('message')

    cuerpo = f"""
    Nombre: {nombre}
    Email: {email}
    Teléfono: {telefono}
    Presupuesto: {presupuesto}

    Mensaje:
    {mensaje}
    """

    try:
        send_mail(
            subject=f"Nuevo contacto: {asunto}",
            message=cuerpo,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False,
        )
        return Response({'success': 'Mensaje enviado correctamente.'}, status=200)
    except Exception as e:
        return Response({'error': str(e)}, status=500)