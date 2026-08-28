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


## Uso de la inteligencia artificial en el desarrollo de esta actividad:

Durante la realización de esta actividad, se utilizó un asistente de IA para resolver problemas de configuración, interpretar errores en la terminal y guiar la implementación técnica paso a paso. A continuación, se detallan los prompts clave utilizados:

1. **Prompt:** *"el siguiente paso, me pide que se analice el código de la api con SonarQube, como lo hago"*
   - **Aporte de la IA:** Proporcionó los comandos de Docker para levantar un servidor local de SonarQube, guió en la creación del archivo `sonar-project.properties` y ayudó a solucionar un error de formato de rutas (`MSYS_NO_PATHCONV=1`) al ejecutar el escáner desde Git Bash en Windows.

2. **Prompt:** *"a continuación, analizar el código de la api to-do list con Trivy, indicarme los pasos usando el proyecto que estamos trabajando"*
   - **Aporte de la IA:** Sugirió ejecutar el escáner de Trivy a través de un contenedor temporal de Docker (`trivy fs`), evitando instalaciones complejas en Windows y permitiendo verificar exitosamente que las dependencias (`package-lock.json`) tenían 0 vulnerabilidades.

3. **Prompt:** *"ahora lo que quiero es el URL de Docker Hub con la imagen publicada y etiqueta de versión, como lo hago"*
   - **Aporte de la IA:** Explicó el flujo de trabajo para repositorios de imágenes, detallando los comandos `docker login`, `docker build -t` y `docker push` para etiquetar la imagen local y subirla al repositorio público correctamente.

4. **Prompt:** *"La tarea me pedía inicialmente que adjunte también la URL del repositorio con el código fuente, como lo hago"*
   - **Aporte de la IA:** Entregó la secuencia exacta de comandos de Git (`git init`, `git add`, `git commit`, `git remote add`, `git push`) para inicializar el historial y subir todo el proyecto a un repositorio público en GitHub.