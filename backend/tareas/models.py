from django.db import models

class Tarea(models.Model):
    PRIORIDADES = [
        ('alta', 'Alta'),
        ('media', 'Media'),
        ('baja', 'Baja'),
    ]

    ESTADOS = [
        ('pendiente', 'Pendiente'),
        ('completada', 'Completada'),
    ]

    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    prioridad = models.CharField(max_length=10, choices=PRIORIDADES, default='media')
    estado = models.CharField(max_length=15, choices=ESTADOS, default='pendiente')
    fecha_vencimiento = models.DateField()

    def __str__(self):
        return self.titulo
