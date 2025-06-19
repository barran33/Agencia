from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    # Asegúrate de que 'acceptedTerms' no sea parte del modelo Contact
    # Si 'acceptedTerms' solo es para el frontend, no debe estar en el serializador ModelSerializer
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'phone', 'subject', 'message', 'budget', 'date_created']
        read_only_fields = ['id', 'date_created']



class OptInSerializer(serializers.Serializer):
    email = serializers.EmailField()
    tag = serializers.IntegerField() # O CharField, dependiendo de cómo lo uses
    list = serializers.IntegerField() # O CharField

