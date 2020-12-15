# Grupo 107 - API de Login Semana 3

## Uso

Esta *API* cuenta con las siguientes rutas

### Listar usuarios (método `GET`)

```javascript
'api/user/'
```

Devuelve un `.json` con todos los usuarios registrados.

### Hacer login (método `POST`)

```javascript
'api/auth/signin'
```

Recibe en el `body` de la petición los parámetros **email** y **password** y devuelve 3 respuestas posibles

- **Login exitoso:** Estado *200*, y devuelve un `jwt-token` con la información del usuario autenticado.
```javascript
{
  auth: true,
  accessToken: token,
}
```
- **Usuario no encontrado:** Estado *404*
```javascript
{
  auth: false,
  accessToken: null,
  message: 'No existe el usuario en nuestros registros'
}
```
- **No autenticado**: Estado *401*, cuando el usuario existe pero la contraseña es incorrecta
```javascript
{
  auth: false,
  accessToken: null,
  message: 'Tus credenciales no coinciden con nuestros registros'
}
```
### Registrar usuarios (método `POST`)

```javascript
'api/auth/register'
```
Recibe en el `body` de la petición los parámetros **name**, **email** y **password** y devuelve 2 respuestas posibles

- **Registro exitoso:** Estado *201*
```javascript
{
  message: 'Registro Exitoso'
}
```
- **Usuario existente:** Estado *400*, si ya existe un usuario con el mismo *email*
```javascript
{
  message: 'El usuario ya existe'
}
```
## Pruebas locales

- Clonar el repositorio
```bash
git clone https://github.com/MinTIC-Group-107/semana-3-107.git
```
- Instalar dependencias de `javascript`
```bash
npm install
```
- Crear una base de datos local o remota y configurar sus credenciales de acceso
Ir al archivo `config/config.json` y modificar los parámetros de acceso a la base de datos de *desarrollo*
```json
{
    "development": {
        "username": "nombreDeUsuario",
        "password": "miContraseña",
        "database": "nombreBaseDeDatos",
        "host": "miHost",
        "dialect": "mysql"
    },
    "test": {
        "dialect": "sqlite",
        "storage": "./database.sqlite3"
    },
    "production": {
        "dialect": "sqlite",
        "storage": "./database.sqlite3"
    }
}
```
- Levantar el servidor local de *node* que por lo general arranca en el puerto 3000

```bash
npm run dev
```
## Pruebas en producción

En la siguiente `baseURL` se encuentra alojada esta *API* para hacer pruebas
```bash
https://mintic-grupo-107-s3.herokuapp.com
```
## Autores
- **Manuel Mosquera:** [mosquera.manuel2011@gmail.com](mailto:mosquera.manuel2011@gmail.com)
- **Andrés Restrepo:** [restrepo.ingeniero2018@gmail.com](mailto:restrepo.ingeniero2018@gmail.com)
- **Clara Inés Marín:** [claramarmfs@gmail.com](mailto:claramarmfs@gmail.com)
- **Luis Antonio Parrado:** [luisprmat@gmail.com](mailto:luisprmat@gmail.com)
