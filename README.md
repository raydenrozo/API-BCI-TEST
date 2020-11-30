# API-BCI-TEST
Test de programación - Banco Bice Lab
La APP esta integrada por dos api una back y otra front.

APP desarrollada con node js y angular

## app nodejs:
## api-rest-server-bci se debe ir a la raiz del proyecto y ejecutar:
1.- Para instalar dependencias Ejecutar: `npm install`
2.- Para iniciar la app: `node apps/api-rest-server-bci/server` desde la raiz de repositorio.
3.- Para las pruebas Unitarias se utilizo el framework JEST y las mismas se pueden ejecutar con 
    el comando `npm run test-dev`
3.- La APi se puede probar con Postman o desde el navegador.
4.- Hay tres servidos que se pueden probar de la siguiente manera:
    Indicadores Generales: url `http://localhost:3000/last`
    Indicadores por key value: `http://localhost:3000/values/cobre`
    Inidicadores por Key value y fecha: `http://localhost:3000/date/cobre/02-01-2020`
    
## app angular
## app-bci-angular-front se debe ir a la raiz del proyecto y ejecutar:
1.- Para instalar dependencias Ejecutar: `npm install`
2.- Para ejecutar la app se debe ejcutar el comando `ng serve`  navegar `http://localhost:4200/`
    Por defecto se va a levanatar el dashboar con una grafica.
3.- URL de la app front `http://localhost:4200/indicatorEconomics`
