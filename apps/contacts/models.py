from django.db import models
from django.utils import timezone

# Create your models here.
class Contact(models.Model):
    name =          models.CharField(max_length=210)
    email =         models.EmailField()
    phone =         models.CharField(max_length=102)
    subject =       models.CharField(max_length=102)
    message =       models.TextField(blank=True)
    budget =        models.CharField(max_length=102,blank=True) 
    date_created =  models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-date_created',)

    def __str__(self):
        return self.email