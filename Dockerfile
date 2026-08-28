# Usar una imagen oficial de Node.js ligera
FROM node:18-alpine

# Crear y establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos de dependencias primero (para optimizar la caché de Docker)
COPY package*.json ./

# Instalar las dependencias dentro del contenedor
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que corre la app
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "server.js"]