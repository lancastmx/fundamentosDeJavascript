# 📌 ROADMAP.md

# SaaS Core — MEAN + TypeScript + MongoDB

Arquitectura Hexagonal + RBAC Jerárquico + Multi-Tenant + Sistema de Notificaciones

---

# 🎯 Objetivo del Proyecto

Construir un SaaS Core reutilizable, modular y escalable, con:

- Multi-organización (Multi-Tenant real)
- RBAC con jerarquía de roles
- Máquina de estados (eliminación de `if` anidados)
- Arquitectura Hexagonal (Ports & Adapters)
- Backend en Node + Express + TypeScript
- Base de datos MongoDB
- Sistema profesional de plantillas de email
- Preparado para escalar horizontalmente

---

# 🧱 Arquitectura

## 📐 Arquitectura Hexagonal (Ports & Adapters)

Capas del sistema:

Domain → Reglas de negocio puras  
Application → Casos de uso  
Infrastructure → MongoDB, JWT, Email, Servicios externos  
Interfaces → HTTP (Express Controllers + Middlewares)

### Regla crítica

- El dominio NO depende de Express, Mongo, Mongoose ni librerías externas.
- Toda dependencia externa entra mediante interfaces (Ports).
- Infrastructure implementa esas interfaces (Adapters).

---

# 🧠 Patrones de Diseño Utilizados

- Entity (DDD)
- Value Objects
- Repository Pattern
- Use Case Pattern
- Dependency Inversion Principle (DIP)
- State Pattern (Máquina de Estados)
- Factory Pattern
- Strategy Pattern
- Template Pattern (Emails)
- Middleware Pattern (Express)

---

# 📁 Estructura del Proyecto

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

# 🚀 FASES DE DESARROLLO

---

# 🟢 FASE 0 — Setup del Proyecto

## Objetivo

Configurar entorno base en TypeScript.

## Tareas

- Inicializar proyecto Node
- Instalar Express, Mongoose, dotenv
- Instalar TypeScript y tipos
- Configurar tsconfig.json en modo strict
- Configurar ESLint + Prettier
- Crear estructura inicial de carpetas
- Configurar servidor Express base
- Configurar conexión a MongoDB (Atlas recomendado)
- Variables de entorno seguras

---

# 🔵 FASE 1 — Dominio (Core del Sistema)

## Objetivo

Construir reglas de negocio puras sin dependencias externas.

---

## 1️⃣ User

- Crear entidad User
- Implementar State Pattern

Estados:

- PendingUserState
- ActiveUserState
- SuspendedUserState

Métodos:

- activate()
- suspend()
- changeEmail()
- requestPasswordReset()

---

## 2️⃣ Organization

- Crear entidad Organization
- Validaciones de creación
- Ownership definido

---

## 3️⃣ Membership (Núcleo Multi-Tenant)

- Crear entidad Membership
- Implementar State Pattern

Estados:

- ACTIVE
- INACTIVE
- CANCELED

Responsabilidades:

- Conectar User ↔ Organization
- Asignar Role
- Controlar estado dentro de la organización

---

## 4️⃣ RBAC Jerárquico

### Entidades

- Role
- Permission

Características:

- parentRoleId (jerarquía)
- Herencia de permisos
- Resolución recursiva

---

## 5️⃣ Invitations

- Crear entidad Invitation
- Estados:
  - PENDING
  - ACCEPTED
  - EXPIRED
  - REVOKED

---

## 6️⃣ Domain Ports (Interfaces)

- UserRepository
- OrganizationRepository
- MembershipRepository
- RoleRepository
- PermissionRepository
- InvitationRepository
- EmailService
- PasswordService
- TokenService

---

# 🟡 FASE 2 — Infrastructure

## Objetivo

Implementar adaptadores externos.

---

## MongoDB

- Crear schemas Mongoose
- Separar Domain de Schema
- Implementar repositorios Mongo
- Mapear Entity ↔ Document

---

## Auth

- Implementar PasswordService (bcrypt)
- Implementar JwtService
- Estrategia de generación de tokens

---

# 🟡 FASE 2B — Sistema de Notificaciones y Plantillas

## Objetivo

Sistema desacoplado de envío de emails profesional.

---

## Arquitectura

Domain define:

EmailService (Port)

Infrastructure implementa:

- SmtpEmailAdapter
- Motor de plantillas (Handlebars recomendado)

---

## 📁 Estructura Email

infrastructure/email/
adapters/
SmtpEmailAdapter.ts
templates/
invitation.hbs
activation.hbs
reset-password.hbs
confirm-email-change.hbs
account-suspended.hbs

---

## 📧 Plantillas Obligatorias

### 1️⃣ Invitación a Organización

Variables:

- organizationName
- inviterName
- inviteLink
- roleAssigned

---

### 2️⃣ Activación de Cuenta

Variables:

- userName
- activationLink

---

### 3️⃣ Reset de Password

Variables:

- userName
- resetLink
- expirationTime

---

### 4️⃣ Confirmación Cambio de Email

---

### 5️⃣ Cuenta Suspendida (Opcional Pro)

---

## Regla Arquitectónica

- Nunca enviar email desde Controller.
- El envío se ejecuta dentro del Use Case.
- EmailService siempre es inyectado por dependencia.

---

# 🟣 FASE 3 — Application (Casos de Uso)

## Objetivo

Orquestar reglas de negocio.

---

## Auth

- RegisterUser
- ActivateUser
- LoginUser
- ChangeEmail
- RequestPasswordReset
- ResetPassword

---

## Organization

- CreateOrganization
- TransferOwnership
- DeleteOrganization

---

## Membership

- AssignRole
- ChangeMemberRole
- RemoveMember

---

## RBAC

- resolveRoleHierarchy()
- checkPermission()

---

## Invitation

- CreateInvitation
- AcceptInvitation
- RevokeInvitation

---

# 🔴 FASE 4 — Interfaces (HTTP Layer)

## Objetivo

Exponer API REST limpia.

---

## Controllers

- AuthController
- OrganizationController
- MembershipController
- InvitationController

---

## Middlewares

- AuthMiddleware (JWT)
- PermissionMiddleware
- ErrorHandlerMiddleware
- ValidationMiddleware

---

# ⚫ FASE 5 — Seguridad y Estabilidad

- Helmet
- CORS seguro
- Rate limiting
- Validación con Zod o Joi
- Manejo centralizado de errores
- Logs estructurados
- Sanitización de inputs

---

# 🟤 FASE 6 — Deploy

## Recomendado

Backend:

- Render

Base de datos:

- MongoDB Atlas

Frontend:

- Static hosting

Variables seguras en entorno productivo.

---

# 📈 FASE 7 — Escalabilidad Futura

- Refresh Tokens
- Auditoría de acciones
- Redis (cache)
- Job Queue (emails async)
- Dockerización
- CI/CD
- Monitoreo
- Multi-idioma en plantillas
- Webhooks
- API Keys por organización

---

# 🧭 Orden Estratégico de Ejecución

1. Setup
2. Dominio completo
3. Repositorios Mongo
4. Auth
5. Organization + Membership
6. RBAC
7. Invitations
8. Sistema de Emails
9. Seguridad
10. Deploy
11. Mejoras de escalabilidad

---

# 🧠 Reglas Arquitectónicas del Proyecto

- El dominio no depende de infraestructura
- No lógica de negocio en controllers
- No acceso directo a Mongoose fuera de repositories
- Toda transición de estado usa State Pattern
- Permisos se validan con middleware + checkPermission
- Membership es el núcleo del multi-tenant
- Emails siempre pasan por EmailService
- Use Cases orquestan todo

---

# 📌 Estado Actual

| Fase           | Estado |
| -------------- | ------ |
| Setup          | ⬜     |
| Dominio        | ⬜     |
| Infrastructure | ⬜     |
| Application    | ⬜     |
| Interfaces     | ⬜     |
| Deploy         | ⬜     |

---

# 🎯 Resultado Esperado

Un SaaS Core modular, escalable y reutilizable, listo para convertirse en:

- CRM
- Plataforma educativa
- Sistema editorial
- Call center
- Marketplace multi-organización
- SaaS B2B personalizado

Base sólida, limpia, mantenible y preparada para crecer.
