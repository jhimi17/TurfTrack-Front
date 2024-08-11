FROM node:20.15.0
WORKDIR /app
EXPOSE 80
RUN npm install -g @angular/cli@17.3.8


# # Establece el directorio de trabajo dentro del contenedor
# WORKDIR /app

# # Copia el package.json y el package-lock.json
# COPY package*.json ./

# # Instala las dependencias
# RUN npm install

# # Copia el resto del código de la aplicación
# COPY . .

# # Construye la aplicación Angular
# #RUN npm run build --prod
# RUN npm run build -- --configuration production

# # Usa una imagen ligera de Nginx para servir la aplicación
# FROM nginx:alpine

# # Copia los archivos construidos desde la etapa anterior
# COPY --from=build /app/dist/cancha-sint /usr/share/nginx/html

# # Expone el puerto en el que Nginx está sirviendo la aplicación
# EXPOSE 80

# # Inicia Nginx
# CMD ["nginx", "-g", "daemon off;"]
