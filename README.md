# Documentación Completa del Proyecto - Prueba Técnica

## 📋 Descripción General

Este proyecto es una aplicación web desarrollada en React que implementa un sistema de gestión de pagos con autenticación de usuarios. La aplicación permite a los usuarios autenticarse, gestionar solicitudes de pago y visualizar listas de pagos en un dashboard interactivo.

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 19.1.0** - Biblioteca principal para la interfaz de usuario
- **React Router DOM 7.7.0** - Enrutamiento de la aplicación
- **TypeScript** - Tipado estático para JavaScript
- **Vite 7.0.4** - Herramienta de construcción y desarrollo

### Styling y UI

- **Tailwind CSS 4.1.11** - Framework de CSS utilitario
- **Tailwind Variants 2.0.1** - Sistema de variantes para componentes
- **clsx 2.1.1** - Utilidad para combinar clases CSS condicionalmente
- **tailwind-merge 3.3.1** - Herramienta para fusionar clases de Tailwind

### Gestión de Estado

- **Zustand 5.0.7** - Gestión de estado global ligera
- **React Hook Form 7.61.1** - Gestión de formularios
- **@hookform/resolvers 5.2.0** - Resolvers para validación de formularios

### Validación y Tipado

- **Valibot 1.1.0** - Biblioteca de validación de esquemas
- **Prop Types 15.8.1** - Validación de props en tiempo de desarrollo

### Autenticación y Backend

- **Firebase 12.0.0** - Servicios de autenticación y base de datos
- **Axios 1.10.0** - Cliente HTTP para peticiones a APIs

### Notificaciones

- **React Hot Toast 2.5.2** - Sistema de notificaciones toast

### Desarrollo y Herramientas

- **ESLint 9.30.1** - Linter para JavaScript/TypeScript
- **Storybook 9.0.18** - Documentación y desarrollo de componentes
- **Yarn** - Gestor de paquetes

## 🗂️ Estructura del Proyecto

```
pruebaTecnica/
├── public/                 # Archivos públicos estáticos
├── src/
│   ├── assets/            # Recursos estáticos (SVGs, imágenes)
│   ├── components/        # Componentes reutilizables
│   │   ├── LoaderComponent/
│   │   ├── RouterTracker/
│   │   └── ui/            # Componentes de UI (Button, Input, Modal, Sidebar)
│   ├── contexts/          # Contextos de React (AuthContext)
│   ├── layouts/           # Layouts de la aplicación
│   ├── pages/             # Páginas de la aplicación
│   │   ├── private/       # Páginas protegidas
│   │   └── public/        # Páginas públicas
│   ├── routes/            # Configuración de rutas
│   ├── schemas/           # Esquemas de validación
│   ├── services/          # Servicios y APIs
│   ├── store/             # Estado global (Zustand stores)
│   ├── types/             # Definiciones de tipos TypeScript
│   ├── utils/             # Utilidades y helpers
│   ├── main.jsx           # Punto de entrada de la aplicación
│   └── index.css          # Estilos globales
├── package.json           # Dependencias y scripts
├── vite.config.js         # Configuración de Vite
└── tsconfig.json          # Configuración de TypeScript
```

## 🛣️ Sistema de Rutas

### Rutas Públicas (Sin Autenticación)

- **`/`** - Página de inicio/Login
- **`/signIn`** - Página de registro

### Rutas Privadas (Con Autenticación)

- **`/dashboard`** - Dashboard principal de la aplicación
- **`/payment-request`** - Formulario para crear solicitudes de pago
- **`/payment-list`** - Lista de pagos y solicitudes

### Estructura de Layouts

- **RootLayout** - Layout principal que envuelve toda la aplicación
- **IndexLayout** - Layout para páginas públicas (login/registro)
- **AuthLayout** - Layout para páginas protegidas con verificación de autenticación
- **DashboardLayout** - Layout específico para el dashboard

## 🔐 Sistema de Autenticación

### Firebase Authentication

- Utiliza Firebase Auth para la gestión de usuarios
- Implementa `onAuthStateChanged` para detectar cambios en el estado de autenticación
- Contexto `AuthContext` proporciona información del usuario autenticado

### Protección de Rutas

- Las rutas privadas están protegidas por `AuthLayout`
- Redirección automática a login si el usuario no está autenticado
- Estado de carga mientras se verifica la autenticación

## 📊 Gestión de Estado

### Zustand Stores

1. **PaymentStore** - Gestión de solicitudes de pago

   - Lista de solicitudes
   - Actualización de estados de pago
   - Tipos: `pending`, `paid`, `reversed`

2. **RecentActivityStore** - Seguimiento de actividad reciente
3. **SidebarStore** - Estado del sidebar de navegación

## 📝 Validación de Formularios

### Valibot Schemas

- **PaymentSchema** - Validación para solicitudes de pago
  - Descripción (requerida)
  - Fecha de vencimiento (formato de fecha válido)
  - Monto total (número válido con máximo 2 decimales)
  - Nombre del pagador (requerido, máximo 200 caracteres)

### React Hook Form

- Integración con Valibot para validación
- Manejo de errores y estados de formulario
- Resolvers para validación en tiempo real

## 🎨 Componentes UI

### Componentes Reutilizables

- **CustomButton** - Botón personalizable con variantes
- **InputField** - Campo de entrada con validación
- **Modal** - Modal reutilizable
- **Sidebar** - Barra lateral de navegación
- **DashboardCards** - Tarjetas para el dashboard
- **LoaderComponent** - Componente de carga

### Storybook

- Documentación interactiva de componentes
- Desarrollo aislado de componentes
- Testing visual de variantes

## 🔧 Configuración y Scripts

### Scripts Disponibles

```bash
yarn dev          # Iniciar servidor de desarrollo
yarn build        # Construir para producción
yarn lint         # Ejecutar ESLint
yarn preview      # Vista previa de la build
yarn storybook    # Iniciar Storybook
yarn build-storybook  # Construir Storybook
```

### Configuración de Vite

- Alias de importación configurados para rutas más limpias
- Plugin de React y Tailwind CSS
- Resolución de módulos optimizada

### Configuración de TypeScript

- Path mapping para imports absolutos
- Configuración estricta de tipos
- Soporte para JSX

## 🚀 Características Principales

### Funcionalidades Implementadas

1. **Autenticación de Usuarios**

   - Login y registro con Firebase
   - Protección de rutas
   - Persistencia de sesión

2. **Gestión de Pagos**

   - Creación de solicitudes de pago
   - Listado de pagos con filtros
   - Estados de pago (pendiente, pagado, revertido)

3. **Dashboard Interactivo**

   - Vista general de pagos
   - Tarjetas informativas
   - Navegación intuitiva

4. **Validación Robusta**

   - Validación de formularios en tiempo real
   - Esquemas de validación tipados
   - Manejo de errores user-friendly

5. **UI/UX Moderna**
   - Diseño responsive con Tailwind CSS
   - Componentes reutilizables
   - Notificaciones toast
   - Estados de carga

## 📱 Responsive Design

La aplicación está diseñada para ser completamente responsive, utilizando:

- Tailwind CSS para breakpoints
- Componentes adaptativos
- Layouts flexibles

## 🔍 Monitoreo y Analytics

### Router Tracker

- Seguimiento de navegación de usuarios
- Registro de actividad reciente
- Integración con el sistema de estado

## 🧪 Testing y Calidad

### ESLint

- Reglas de linting para React
- Configuración para hooks
- Integración con Storybook

### Storybook

- Testing visual de componentes
- Documentación interactiva
- Desarrollo aislado

## 📦 Despliegue

### Firebase Hosting

- Configuración de Firebase para hosting
- Build optimizada para producción
- Configuración de reglas de seguridad

## 🔮 Próximas Mejoras

### Funcionalidades Sugeridas

1. **Testing Unitario**

   - Jest y React Testing Library
   - Tests de componentes y hooks

2. **Optimización de Performance**

   - Lazy loading de rutas
   - Memoización de componentes ejemplo lista paginada para
   - Code splitting

3. **Funcionalidades Adicionales**

   - Exportación de datos
   - Filtros avanzados
   - Notificaciones push

4. **Mejoras de UX**
   - Animaciones y transiciones
   - Modo oscuro
   - Accesibilidad mejorada

---

_Esta documentación proporciona una visión completa del proyecto, incluyendo todas las tecnologías utilizadas, la estructura del código, el sistema de rutas y las funcionalidades implementadas._
