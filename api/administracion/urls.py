from rest_framework import routers
from administracion.views import EmpresaViewSet, ActividadViewSet

router = routers.DefaultRouter()
router.register('admin/empresas', EmpresaViewSet)
router.register('admin/actividades', ActividadViewSet)

urlpatterns = router.urls