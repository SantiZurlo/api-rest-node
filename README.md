# API REST con Node.js y Firebase

## Descripción

API REST para la gestión de productos desarrollada con Node.js y Express.

## Instalacion 

1. Clonar el repositorio
2. Instalar dependecias:

```shell 
npm install 
```

3. Configurar variables de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Documentación de la API

### Obtener todos los productos

- **GET** `/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```json
[
    {"id": 1, "name": "Camiseta Deportiva", "price": 150},
    {"id": 2, "name": "Zapatos Running", "price": 1200},
    {"id": 3, "name": "Mochila Escolar", "price": 350},
]
```

### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parámetros:**
 - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/products/search?name=camiseta`
- **Respuesta ejemplo:**

```json
[{"id": 1, "name": "Camiseta Deportiva", "price": 150}]
```

### Obtener producto por ID

- - **GET** `/products/:id`
- **Descripción:** Devuelve un producto específico por su ID.
- **Parámetros:**
 - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/products/1`
- **Respuesta ejemplo:**

```json
[{"id": 1, "name": "Camiseta Deportiva", "price": 150}]
```

### Crear un producto

- **POST** `/products`
- **Descripción:** Crea un nuevo producto.
- **Body (JSON):**

```json
    {
        "categories": [
            "Categoria 1",
            "Categoria 2"
        ],
        "name": "Producto 1",
        "price": 100
    }
```

- **Respuesta ejemplo:**

```json
{
    "id": "554oUPzLbtRI1LMwZzlh",
    "name": "Producto 1",
    "price": 100,
    "categories": [
        "Categoria 1",
        "Categoria 2"
    ]
}
```