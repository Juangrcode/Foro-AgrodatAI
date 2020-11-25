from rest_framework import viewsets
from administracion.serializers import EmpresaSerializer, ActividadSerializer
from administracion.models import Empresa, Actividad

# Create your views here.
class EmpresaViewSet(viewsets.ModelViewSet):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer

class ActividadViewSet(viewsets.ModelViewSet):
    queryset = Actividad.objects.all()
    serializer_class = ActividadSerializer