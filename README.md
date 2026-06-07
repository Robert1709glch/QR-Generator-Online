# Generador de codigos QR online

Proyecto hecho con **React + Vite** en el que se coloca un texto/link y genera un
codigo QR en tiempo real al agregar texto

---

## Tecnologias que se usaron

- **React 18** (Functional Components & Hooks: `useState`, `useRef`)
- **Vite** (Herramienta de empaquetado ultra rápida)
- **pnpm** (Gestor de paquetes rápido y eficiente con el espacio en disco)
- **qrcode.react** (Librería robusta para el renderizado de códigos QR en Canvas)
- **CSS Modules** (Para estilos locales estructurados)
- **Web Storage API** (`localStorage` para la persistencia del historial)

---

## Estructura del proyecto

El código está organizado bajo una arquitectura limpia y escalable:

```text
src/
├── components/       # Componentes globales (Header, Footer, etc.)
├── hooks/            # Custom Hooks futuros
├── pages/            # Páginas de la aplicación (Home.jsx y Home.module.css)
├── styles/           # Estilos globales y variables de diseño
├── App.jsx           # Componente raíz y orquestador
└── main.jsx          # Punto de entrada de la aplicación
```
---

### Funcionalidad

Cualquier texto o link, se generará un QR dinamico, este codigo irá transformandose
conforme mas texto se le agregue.

Al finalizar, se puede personalizar el color del QR con una amplia paleta de 
colores que, de igual manera, cambia dinamicamtente a forma de preview, al finalizar
se puede descargar el codigo en formato `.png` y se guardará en un historial,
desde el que podremos recuperar los anteriores codigos, asi como editarlos para
agregarles mas información, etc.

---
