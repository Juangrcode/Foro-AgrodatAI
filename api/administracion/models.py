from django.db import models

# Create your models here.
class Empresa(models.Model):
    nombre_empresa = models.CharField(max_length=150, unique=True, null=False)
    nit = models.CharField(max_length=100, null=False)
    is_admin = models.IntegerField()
    telefono = models.CharField(max_length=100)
    tipo = models.CharField(max_length=1)

class Actividad(models.Model):
    nombre_actividad = models.CharField(max_length=150, unique=True, null=False)
    tipo = models.CharField(max_length=1)