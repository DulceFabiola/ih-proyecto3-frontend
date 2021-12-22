# FLUENCY

[Fluency](https://fluency.netlify.app/) proyecto desarrollado en React y CSS, Tailwind por parte del frontend.

## Inicializando el proyecto

#### Dependecias

- Es necesario instalar las dependencias, tan pronto se clone el proyecto.

```shell
$ npm install
```

Una vez hecho esto, crear un archivo `.env` para generar las variables de entorno.

`.env`

```
REACT_APP_BACKEND_URL='API_BACKEND'
```

Para correr la aplicación de manera local, deberá ejecutar:

### `npm run start`

puede visualizar el proyecto en el navegador:
[http://localhost:3000](http://localhost:3000).

##Estructura del proyecto

**El proyecto se estructura de la siguiente manera:**

- public
- src
  - componentes
  - config
  - context
  - routes
- Hoja de estilos
- Archivo principal de JS
- Router

## Páginas de Fluency

- Home
- Registro
- Inicia sesión
- Mi perfil
- Cursos disponibles
- Detalles de curso
- Encuentra un teacher
- Algo más sobre un teacher
- Planes

## Componentes

#### Home

El home es una página que se renderiza solamente cuando el usuario no está autenticado y su proposito es meramente hablar sobre Fluency y su próposito en el mercado.
http://localhost:3000

#### Register

Página de autenticación, cuentan con la integración de un manejo de errores, email previamente registrado. [Registro](http://localhost:3000/signup)

#### Login

Página de autenticación, cuentan con la integración de un manejo de errores, email inválido, password o email incorrecto. [Inicio de sesión](http://localhost:3000/login)

#### Mi perfil

Perfil de usuario, renderiza la información general del usuario, y le permite actualizar datos. [Mi perfil](http://localhost:3000/profile)

Fluency tiene dos tipos de usuarios: teacher y alumno.

Para usuarios con rol de tipo alumno, se renderiza un monitoreo con estadisticas de su aprendizaje y cursos inscritos.

Para usuario con role de tipo teacher, se renderizan los cursos creados por el usuario.

### Cursos disponibles

En está vista se renderizan nuestros cursos actuales y disponibles, creados por los teachers.
[Nuestros cursos](http://localhost:3000/courses)

### Detalles de curso

Cada curso tiene una página con el detalle completo. Basta con dar click a uno en especifico para redireccionarlo [detalles de curso](http://localhost:3000/courses/61c2afd4bc2ae07e06968467).

En caso de ser el autor del curso, se habilitará la opción de editar o eliminar curso.

En caso de ser alumno, se habilita la opción de inscribir curso.

### Encuentra un teacher

Está página nos muestran los teachers actuales de fluency, [nuestros teachers](http://localhost:3000/teachers).

### Algo más sobre un teacher

Cada teacher tiene una página con el detalle completo. Basta con dar click a uno en especifico para redireccionarlo [detalles de teacher](http://localhost:3000/teachers/61c2ade52e81b92bf3a25bb9).

### Planes

En la página de planes se redirecciona para realizar el pago por el curso a inscribir. [Planes](http://localhost:3000/plans)

### Gracias por su tiempo y eneseñanza

A Teacher [Mike](https://github.com/mikenieva), [Sam](https://github.com/ta-web-mex) y [K'ohnin](https://github.com/konhin2)
