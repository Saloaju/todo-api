# To-Do API REST en Node.js y Docker

Esta es una API REST sencilla para gestionar tareas, construida con Node.js, Express y empaquetada con Docker.

## Requisitos previos
- Tener [Docker](https://www.docker.com/) instalado.

## Instrucciones de ejecución

1. **Construir la imagen de Docker**:
   Abre una terminal en la raíz de este proyecto y ejecuta:
   \`\`\`bash
   docker build -t todo-api .
   \`\`\`

2. **Ejecutar el contenedor**:
   Inicia la aplicación mapeando el puerto 3000 de tu máquina al puerto 3000 del contenedor:
   \`\`\`bash
   docker run -p 3000:3000 -d --name my-todo-api todo-api
   \`\`\`
   El flag `-d` corre el contenedor en segundo plano.

3. **Verificar que funciona**:
   Puedes probar que la API está funcionando abriendo tu navegador o usando herramientas como `curl` o Postman.
   
   - **Ver todas las tareas (GET):**
     \`curl http://localhost:3000/tasks\`

4. **Detener el contenedor**:
   Cuando termines de usar la API, puedes detener el contenedor con:
   \`\`\`bash
   docker stop my-todo-api
   docker rm my-todo-api
   \`\`\`