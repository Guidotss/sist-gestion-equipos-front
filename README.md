# 📋 Kanban Task Manager

Una aplicación web moderna para la gestión de proyectos y tareas utilizando el sistema Kanban.

## 🚀 Características Principales
- Interfaz intuitiva con drag & drop
- Colaboración en tiempo real
- Sistema de notificaciones
- Modo offline
- Gráficos de progreso y Gantt
- Gestión de dependencias entre tareas

## 🛠️ Plan de Desarrollo

### Fase 1: Autenticación y Layout 🔐
- [ ] Sistema de autenticación completo
  - Página de Login/Registro con validación
  - Integración con API (Axios)
  - Gestión de estado global (`AuthContext`)
- [ ] Layout responsive
  - 📑 Sidebar con navegación de proyectos
  - 👤 Header con perfil y centro de notificaciones
  - 📊 Área principal adaptativa

### Fase 2: Tablero Kanban 📌
- [x] `ProjectBoard` con columnas Kanban
- [ ] Componente `TaskCard` interactivo
  - Vista previa de información clave
  - Indicadores de prioridad
  - Avatares de usuarios asignados
- [ ] Sistema drag & drop (react-beautiful-dnd)
- [ ] Integración con API REST

### Fase 3: Gestión de Tareas ✏️
- [ ] Modal de tareas completo
  - Editor de información
  - Sistema de comentarios
  - Historial de cambios
- [ ] CRUD completo de tareas
  - Creación intuitiva
  - Edición en tiempo real
  - Eliminación con confirmación

### Fase 4: Colaboración en Tiempo Real 🔄
- [ ] Integración Socket.IO
- [ ] Actualizaciones en tiempo real
- [ ] Indicadores de presencia
- [ ] Sistema de bloqueo de edición

### Fase 5: Funciones Intermedias 🎯
- [ ] Filtros avanzados
  - Por estado
  - Por asignación
  - Por prioridad
- [ ] Sistema de comentarios
- [ ] Métricas de progreso

### Fase 6: Funciones Avanzadas 💫
- [ ] Visualización Gantt
- [ ] Gestión de dependencias
- [ ] Modo offline
  - Service Workers
  - Sincronización IndexedDB
- [ ] Centro de notificaciones
