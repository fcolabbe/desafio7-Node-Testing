# Pruebas Unitarias - API REST Cafetería Nanacao

Este proyecto contiene pruebas unitarias para la API REST de la Cafetería Nanacao, desarrolladas con Jest y Supertest.

## Descripción

La Cafetería Nanacao está expandiendo sus operaciones con una nueva sucursal en el centro de la ciudad. Para asegurar la estabilidad y fiabilidad de su sistema de administración, se han desarrollado pruebas unitarias que verifican el correcto funcionamiento de las diferentes rutas de la API.

## Requisitos

- Node.js
- npm

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/fcolabbe/desafio7-Node-Testing.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd cafeteria-nanacao-tests
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución de las pruebas

Para ejecutar las pruebas, usa el siguiente comando:

```
npm test
```

## Pruebas implementadas

1. GET /cafes: Verifica que la ruta devuelve un status code 200 y un arreglo con al menos 1 objeto.
2. DELETE /cafes/:id: Comprueba que se obtiene un código 404 al intentar eliminar un café con un id inexistente.
3. POST /cafes: Prueba que la ruta agrega un nuevo café y devuelve un código 201.
4. PUT /cafes: Verifica que la ruta devuelve un status code 400 si se intenta actualizar un café con un id en los parámetros diferente al id del payload.

