```markdown
# 🛒 Carrito de Compras React

Proyecto de carrito de compras moderno y minimalista hecho con **React**, **Tailwind CSS** y **styled-components**. Permite añadir, eliminar, modificar y vaciar productos del carrito, con persistencia en LocalStorage y notificaciones animadas tipo toast.

---

## 📂 Estructura del Proyecto

```
carritoCompras/
├── src/
│   ├── components/
│   │   ├── Carrito.js
│   │   ├── Producto.js
│   │   ├── ProductosList.js
│   │   └── Toast.js
│   ├── context/
│   │   └── CartContext.js
│   ├── styles/
│   │   └── (configuración de Tailwind)
│   ├── App.js
│   └── index.js
├── package.json
└── tailwind.config.js
```

---

## 🛠️ Instalación y Puesta en Marcha

1. **Clona el repositorio:**
   ```
   git clone https://github.com/CarlotadeMiguel/carritoCompras.git
   cd carritoCompras
   ```

2. **Instala las dependencias:**
   ```
   npm install
   ```

3. **Configura Tailwind CSS:**
   - Ya está preconfigurado en el proyecto. Si necesitas reconfigurar:
     ```
     npx tailwindcss init
     ```
   - Asegúrate de importar Tailwind en tu archivo de estilos global (ej: `index.css`).

4. **Ejecuta la aplicación:**
   ```
   npm start
   ```

---

## 🧩 Componentes y Funcionalidad

- **Contexto Global (`CartContext.js`):**
  - Estado global del carrito con `useReducer`.
  - Acciones: añadir, eliminar, aumentar/disminuir cantidad, vaciar carrito.
  - Persistencia automática en LocalStorage.
  - Gestión de toasts para notificaciones.

- **Producto (`Producto.js`):**
  - Muestra nombre, precio, imagen y botón "Añadir al carrito".
  - Si el producto ya está en el carrito, incrementa su cantidad.

- **Lista de Productos (`ProductosList.js`):**
  - Grid responsive con todos los productos disponibles.

- **Carrito (`Carrito.js`):**
  - Lista los productos añadidos, permite aumentar/disminuir cantidad, eliminar individualmente o vaciar todo el carrito.
  - Muestra el total actualizado.
  - Diseño responsive: botón para mostrar/ocultar en móvil.

- **Toast (`Toast.js`):**
  - Notificaciones flotantes animadas con `styled-components`.
  - Desaparecen automáticamente tras 3 segundos.

---

## 💾 Persistencia

El carrito se guarda automáticamente en **LocalStorage**. Al recargar la página, se mantiene el estado del carrito.

---

## 🎨 Tecnologías

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [styled-components](https://styled-components.com/) (solo para Toast)
- Context API + useReducer

---

## 📋 Funcionalidades principales

- Añadir productos al carrito.
- Incrementar/decrementar cantidad.
- Eliminar productos individuales.
- Vaciar todo el carrito.
- Total dinámico.
- Persistencia en LocalStorage.
- Notificaciones visuales animadas.

---

## 📱 Diseño

- Minimalista, moderno y responsive.
- Uso intensivo de utilidades Tailwind para espaciados, colores y tipografía.
- Animaciones suaves y experiencia de usuario cuidada.

---

## 🙌 Créditos

Desarrollado por [CarlotadeMiguel](https://github.com/CarlotadeMiguel).

---
