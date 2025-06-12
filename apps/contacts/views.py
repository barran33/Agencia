import os
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings

from rest_framework.permissions import AllowAny
from rest_framework.authentication import BasicAuthentication

from .auth import CsrfExemptSessionAuthentication
from .serializers import ContactSerializer 

from django.views.decorators.csrf import csrf_exempt 
from django.utils.decorators import method_decorator 

@method_decorator(csrf_exempt, name='dispatch') 
class ContactAPIView(APIView):
    authentication_classes = [CsrfExemptSessionAuthentication, BasicAuthentication]
    permission_classes = [AllowAny] 

    def post(self, request, *args, **kwargs):
        print("Datos recibidos en la vista (print 1):", request.data)
        print("Tipo de request.data (print 2):", type(request.data))

        serializer = ContactSerializer(data=request.data) 
        if serializer.is_valid():
            nombre      = serializer.validated_data.get('name')
            email       = serializer.validated_data.get('email')
            telefono    = serializer.validated_data.get('phone')
            asunto      = serializer.validated_data.get('subject') 
            presupuesto = serializer.validated_data.get('budget')
            mensaje     = serializer.validated_data.get('message')

            cuerpo = f"""
            Tienes un nuevo mensaje de contacto desde tu sitio web:

            Nombre: {nombre}
            Email: {email}
            Teléfono: {telefono}
            Presupuesto: {presupuesto}

            Mensaje:
            {mensaje}
            """
            
            recipient_for_form = 'support@cosmic-imagination.com' # <--- ESTA ES LA DIRECCIÓN

            send_mail(
    
                recipient_list=[recipient_for_form],# <--- El correo se envía aquí
            ) 

            try:
                # serializer.save()

                send_mail(
                    subject=f"Nuevo contacto: {asunto}", 
                    message=cuerpo, 
                    from_email=settings.DEFAULT_FROM_EMAIL, 
                    recipient_list=[recipient_for_form], 
                    fail_silently=False,
                )
                print("Mensaje enviado correctamente.") 

                return Response({'success': 'Mensaje enviado correctamente.'}, status=status.HTTP_200_OK) 
            except Exception as e:
                print(f"Error al enviar correo: {e}") 
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 
        else:
            print("Errores del serializador:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
