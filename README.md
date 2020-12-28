# ProcesoTitulacion
Proceso de titulación del IST
Instalar componenetes de angular en la carpeta CtitulacionClient con el comando 

```bash
npm install 
```

Instalar componenetes de composer en la carpeta CtitulacionServer con el comando 

```bash
composer install 
```

Luego de ello ejecutar el comando para la generacion de una nueva key en la aplicacion

```bash
php artisan key:generate
```

Y como punto final ejecutar el siguiente comando para la generacion de un nuevo client ID esto es respecto al login y registro de la aplicacion
```
php artisan passport:install
```