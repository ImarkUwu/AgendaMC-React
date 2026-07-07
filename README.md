# Agenda Web - React
## Estructura

- `src/App.jsx` → **Componente padre**. Maneja el estado (contactos, mensajes, búsqueda) y las llamadas a la API (GET y POST). Contiene a los dos componentes hijos.
- `src/components/FormularioContacto.jsx` → **Componente hijo** para agregar nuevos contactos (formulario con validaciones).
- `src/components/ListaContactos.jsx` → **Componente hijo** para mostrar el listado de contactos en una tabla.

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
