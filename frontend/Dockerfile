# Etapa de compilación
FROM node:20.19 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --configuration=production

# Etapa de producción con nginx
FROM nginx:alpine

# Copia el build al contenedor nginx
COPY --from=builder /app/dist/* /usr/share/nginx/html/

EXPOSE 80
