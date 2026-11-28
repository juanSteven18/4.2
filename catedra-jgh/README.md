# Cátedra Dr. José Gregorio Hernández — Bitácora Interactiva (CRUD)

Aplicación web desarrollada con **ReactJS** y **Vite** para la gestión interactiva de registros históricos, aportes científicos, valores humanitarios y testimonios vinculados a la **Cátedra Libre Universitaria Dr. José Gregorio Hernández**.

---

## Información Académica

* **Actividad:** e-actividad 4.2 — CRUD usando JavaScript y programación reactiva manipulando el DOM.
* **Docente:** Prof. Anggelo Huz
* **Integrantes:**
  * Glorimar Maldonado
  * Juan Reategui

---

## Características Técnicas Implementadas

* **Operaciones CRUD completas:**
  * **Crear (Create):** Formulario validado para registrar nuevas fichas en la bitácora.
  * **Leer (Read):** Visualización dinámica en tarjetas con búsqueda en tiempo real y filtrado por ejes temáticos.
  * **Actualizar (Update):** Edición directa de cualquier registro existente con carga automática en el formulario.
  * **Eliminar (Delete):** Borrado individual con confirmación previa y opción para restaurar los 5 registros iniciales de ejemplo.
* **Persistencia con API `localStorage`:** Almacenamiento local automático mediante `localStorage.setItem`, `localStorage.getItem`, `JSON.stringify` y `JSON.parse` bajo la clave `catedra_jgh_bitacora_v1`, conservando los datos al recargar el navegador.
* **Programación Reactiva y Manipulación del DOM:** Uso de Hooks de React (`useState`, `useEffect`, `useRef`) para actualizar la interfaz de forma reactiva, junto con manipulación directa del DOM (`document.title`, atributos `dataset`, `scrollIntoView()` y gestión de foco con `focus()`).
* **HTML5 Semántico con Explicaciones:** Implementación de estructura semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) y una sección educativa dedicada que ejemplifica y explica el uso nativo de etiquetas como `<time>`, `<details>`, `<summary>`, `<mark>`, `<blockquote>`, `<figure>`, `<figcaption>` y `<progress>`.
* **CSS3 Personalizado y Diseño Responsive:** Hoja de estilos escrita desde cero sin plantillas externas, utilizando variables CSS (`:root`), CSS Grid, Flexbox y *media queries* (`@media (max-width: 768px)`) para adaptarse a dispositivos móviles, tabletas y escritorio.

---

## Estructura del Proyecto

```text
catedra-jgh/
├── index.html                    # Documento raíz HTML5 con configuración de idioma y viewport
├── package.json                  # Dependencias y scripts de Vite + React
├── vite.config.js                # Configuración del entorno de desarrollo Vite
└── src/
    ├── main.jsx                  # Punto de entrada de React en el DOM
    ├── App.jsx                   # Componente principal, lógica CRUD, localStorage y notificaciones
    ├── index.css                 # Estilos personalizados, variables CSS y reglas responsive
    ├── components/
    │   ├── FichaForm.jsx         # Formulario controlado para crear y editar registros
    │   ├── FichaLista.jsx        # Listado reactivo, buscador, filtros por categoría y acciones
    │   └── Html5Ejemplos.jsx     # Guía interactiva con ejemplos y explicaciones de HTML5
    └── data/
        └── fichasIniciales.js    # Categorías y registros iniciales de la Cátedra JGH
```

---

## Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/TU-USUARIO/TU-REPOSITORIO.git](https://github.com/TU-USUARIO/TU-REPOSITORIO.git)
   ```
2. Entrar a la carpeta del proyecto:
   ```bash
   cd catedra-jgh
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```
4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abrir en el navegador la dirección local indicada por la terminal (generalmente `http://localhost:5173/`).

---

## Entregables Complementarios

* **Prototipo en Figma:** *(Pega aquí el enlace a tu diseño en Figma)*
* **Video Explicativo:** *(Pega aquí el enlace a tu video explicativo)*