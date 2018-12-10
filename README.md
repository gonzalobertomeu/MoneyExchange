# MoneyExchange
Aplicación de conversión de US$ <-> AR$

## Dependencias

+ NodeJS >= 10.14.1
+ npm >= 6.4.1

## Instalación
### Backend
Ingresar a carpeta /server, luego ejecutar:

```bash
    npm install
    npm start
```

Si se quiere correr el servidor en modo observador (esperando cambios y reiniciando el servidor)

```bash
    npm run dev
```

#### Config
.env-example (renombrar a .env):

### Frontend
Ingresar a la carpeta /client, luego ejecutar:

```sh
    npm install
    ng serve
```

#### Config
Url del backend en carpeta /environments/environment.prod.ts

Si es uso local:

    ng serve

Si se configura el environment.prod.ts (con ip del backend);

    npm run prod
