# 🚀 SaaS Core — MEAN + TypeScript + MongoDB

Arquitectura Hexagonal + RBAC Jerárquico + Multi-Tenant + Sistema de Notificaciones

---

# 📌 Descripción

SaaS Core es una base backend profesional construida con:

- Node.js
- Express
- TypeScript
- MongoDB
- Arquitectura Hexagonal (Ports & Adapters)
- RBAC con jerarquía de roles
- Máquina de estados (State Pattern)
- Sistema desacoplado de emails con plantillas

Este proyecto está diseñado para ser reutilizado como núcleo de:

- CRM
- Plataforma educativa
- Marketplace multi-organización
- SaaS B2B personalizado
- Sistema editorial
- Call center

---

# 🧱 Arquitectura

## 📐 Hexagonal (Ports & Adapters)

El sistema está dividido en capas estrictamente separadas:

Domain → Reglas de negocio puras
Application → Casos de uso
Infrastructure → MongoDB, JWT, Email
Interfaces → HTTP (Express)

### 🔒 Regla crítica

- El dominio NO depende de Express, MongoDB ni librerías externas.
- Toda dependencia entra mediante interfaces (Ports).
- Infrastructure implementa esas interfaces (Adapters).

---

# 🧠 Patrones de Diseño Implementados

- Entity (DDD)
- Value Objects
- Repository Pattern
- Use Case Pattern
- Dependency Inversion Principle (DIP)
- State Pattern (Máquinas de Estado)
- Factory Pattern
- Strategy Pattern
- Template Pattern (Emails)
- Middleware Pattern (Express)

---

# 🏗 Estructura del Proyecto

backend/
└── src/
├── domain/
│ ├── entities/
│ ├── value-objects/
│ ├── repositories/
│ ├── services/
│ └── notifications/
│
├── application/
│ ├── use-cases/
│ └── notifications/
│
├── infrastructure/
│ ├── database/
│ ├── repositories/
│ ├── auth/
│ ├── email/
│ │ ├── adapters/
│ │ └── templates/
│ └── config/
│
├── interfaces/
│ ├── controllers/
│ ├── routes/
│ └── middlewares/
│
├── config/
└── server.ts

---

# 🏢 Funcionalidades Principales

## ✅ Multi-Tenant

Un usuario puede pertenecer a múltiples organizaciones mediante la entidad:

Membership

Responsable de:

- Vincular usuario ↔ organización
- Asignar rol
- Controlar estado dentro de la organización

---

## 🔐 RBAC Jerárquico

Roles con herencia:

Owner
└── Admin
└── Supervisor
└── Seller

- Soporta parentRoleId
- Resolución recursiva de permisos
- Validación mediante middleware

---

## 🔄 Máquina de Estados

Eliminación de `if` anidados usando State Pattern.

### User States:

- PendingUserState
- ActiveUserState
- SuspendedUserState

### Membership States:

- ACTIVE
- INACTIVE
- CANCELED

---

## 📧 Sistema de Emails

Sistema desacoplado con:

- EmailService (Port)
- SmtpEmailAdapter (Adapter)
- Motor de plantillas (Handlebars)

### Plantillas incluidas:

- invitation.hbs
- activation.hbs
- reset-password.hbs
- confirm-email-change.hbs
- account-suspended.hbs

---

# ⚙️ Instalación

## 1️⃣ Clonar repositorio

```bash
git clone <repo-url>
cd backend
2️⃣ Instalar dependencias
npm install
3️⃣ Configurar variables de entorno

Crear archivo .env:

PORT=3000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
SMTP_HOST=your_host
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_password
4️⃣ Ejecutar en desarrollo
npm run dev
🔑 Scripts Disponibles
npm run dev        # Desarrollo con ts-node-dev
npm run build      # Compilar TypeScript
npm run start      # Ejecutar versión compilada
npm run lint       # Linter
🔒 Seguridad

Incluye:

Helmet

CORS configurado

Rate limiting

Validación con Zod/Joi

Manejo centralizado de errores

Sanitización de inputs

🌍 Deploy Recomendado

Backend:

Render

Base de datos:

MongoDB Atlas

Opcional:

Dockerización futura

CI/CD pipeline

Redis para cache

Job queue para emails asíncronos

📈 Escalabilidad Futura

Refresh Tokens

Auditoría de acciones

Logs estructurados

Webhooks

API Keys por organización

Multi-idioma en plantillas

Sistema de eventos interno

🧪 Testing (Recomendado)

Unit tests en Domain

Mock de EmailService

Mock de Repositories

Tests de integración en Infrastructure

Tests E2E en capa HTTP

🧭 Principios del Proyecto

No lógica de negocio en controllers

No acceso directo a Mongoose fuera de repositories

Todas las transiciones usan State Pattern

Permisos se validan vía middleware + checkPermission

Membership es el núcleo del multi-tenant

El dominio es 100% independiente

🎯 Objetivo Final

Un núcleo SaaS sólido, profesional y escalable que permita construir cualquier sistema B2B sobre una arquitectura limpia y mantenible.

📄 Licencia

MIT
```
