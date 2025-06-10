from django.conf import settings
from django.core.mail import send_mail
from rest_framework.views import APIView # <-- Importa APIView
from rest_framework.response import Response
from rest_framework import status # <-- Para los códigos de estado
from rest_framework.permissions import AllowAny
from rest_framework.authentication import BasicAuthentication

# Importa tu autenticador sin CSRF y tu serializador
from .auth import CsrfExemptSessionAuthentication
from .serializers import ContactSerializer # <-- ¡Asegúrate de importar tu serializador!

from django.views.decorators.csrf import csrf_exempt # Para el decorador
from django.utils.decorators import method_decorator # Para aplicar a class-based views

@method_decorator(csrf_exempt, name='dispatch') # Aplica el csrf_exempt a la clase
class ContactAPIView(APIView):
    # Ya no necesitas @api_view, @authentication_classes, @permission_classes aquí.
    # Se configuran a nivel global en settings.py o a nivel de clase de la siguiente manera:
    authentication_classes = [CsrfExemptSessionAuthentication, BasicAuthentication]
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        # ¡IMPORTANTE! Debugging print aquí para ver qué llega
        print("Datos recibidos en la vista (print 1):", request.data)
        print("Tipo de request.data (print 2):", type(request.data))

        serializer = ContactSerializer(data=request.data) # <-- Usa tu serializador
        if serializer.is_valid():
            # Los datos ya están validados y limpios en serializer.validated_data
            nombre      = serializer.validated_data.get('name')
            email       = serializer.validated_data.get('email')
            telefono    = serializer.validated_data.get('phone')
            asunto      = serializer.validated_data.get('subject')
            presupuesto = serializer.validated_data.get('budget')
            mensaje     = serializer.validated_data.get('message')

            cuerpo = f"""
            Nombre: {nombre}
            Email: {email}
            Teléfono: {telefono}
            Presupuesto: {presupuesto}

            Mensaje:
            {mensaje}
            """
            try:
                # Si quieres guardar el contacto en la base de datos:
                # serializer.save()

                send_mail(
                    subject=f"Nuevo contacto: {asunto}",
                    message=cuerpo,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.EMAIL_HOST_USER],
                    fail_silently=False,
                )
                return Response({'success': 'Mensaje enviado correctamente.'}, status=status.HTTP_200_OK) # Usa status
            except Exception as e:
                print(f"Error al enviar correo: {e}") # Para ver errores de envío de correo
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) # Usa status
        else:
            # Si el serializador no es válido, devuelve los errores del serializador
            print("Errores del serializador:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)