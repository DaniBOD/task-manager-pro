# Imagen base
FROM python:3.11-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia archivos al contenedor
COPY . .

# Instala dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Expone el puerto de Django
EXPOSE 8000

# Comando para migrar y ejecutar
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
