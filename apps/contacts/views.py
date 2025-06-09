from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def contact_view(request):
    data = request.data
    nombre = data.get('name')
    email = data.get('email')
    telefono = data.get('phone')
    mensaje = data.get('message')
    asunto = data.get('subject')
    presupuesto = data.get('budget')

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
            from_email=email,  # O usa DEFAULT_FROM_EMAIL
            recipient_list=['jorge369b@cosmic-imagination.com'],
            fail_silently=False,
        )
        return Response({'success': 'Mensaje enviado correctamente.'}, status=200)
    except Exception as e:
        return Response({'error': str(e)}, status=500)
