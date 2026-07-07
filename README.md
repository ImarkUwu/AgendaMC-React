# Agenda Web - React

Conversión a React de la tarea #3, dividida en componentes.

## Estructura

- `src/App.jsx` → **Componente padre**. Maneja el estado (contactos, mensajes, búsqueda) y las llamadas a la API (GET y POST). Contiene a los dos componentes hijos.
- `src/components/FormularioContacto.jsx` → **Componente hijo** para agregar nuevos contactos (formulario con validaciones).
- `src/components/ListaContactos.jsx` → **Componente hijo** para mostrar el listado de contactos en una tabla.
- `src/style.css` → Los mismos estilos que ya tenías.

## Cómo correrlo

1. Instala las dependencias:
   ```
   npm install
   ```
2. Corre el servidor de desarrollo:
   ```
   npm run dev
   ```
3. Abre la URL que te muestre la terminal (usualmente `http://localhost:5173`).
