# 🏁 SPRINT PLAN — SaaS Core (MEAN + TypeScript + MongoDB)

Duración por sprint: 2 semanas  
Enfoque: De macro-tareas → micro-tareas ejecutables

---

# 🟢 SPRINT 1 (Semanas 1–2)

## 🎯 Objetivo: Setup profesional + Base de Arquitectura Hexagonal

---

## 1️⃣ Configurar Proyecto Backend

### ➜ Inicializar proyecto

- Crear carpeta backend
- Ejecutar npm init -y
- Instalar dependencias base:
  - express
  - mongoose
  - dotenv
- Instalar dependencias dev:
  - typescript
  - ts-node-dev
  - @types/express
  - @types/node
  - eslint
  - prettier

### ➜ Configurar TypeScript

- Crear tsconfig.json
- Activar strict mode
- Configurar rootDir y outDir
- Configurar paths alias (@domain, @application, etc.)

### ➜ Configurar calidad de código

- Configurar ESLint
- Configurar Prettier
- Agregar scripts en package.json

---

## 2️⃣ Crear Estructura Hexagonal

### ➜ Crear carpetas base

- src/domain
- src/application
- src/infrastructure
- src/interfaces
- src/config

### ➜ Configurar servidor base

- Crear server.ts
- Configurar Express
- Configurar middlewares básicos
- Crear endpoint /health

---

## 3️⃣ Configurar MongoDB

### ➜ Configurar conexión

- Crear archivo database.ts
- Leer URI desde .env
- Manejar errores de conexión
- Exportar función connectDatabase()

---

## 4️⃣ Configurar Sistema de Configuración

### ➜ Crear módulo config

- Cargar variables con dotenv
- Validar variables requeridas
- Exportar objeto tipado

---

# 🔵 SPRINT 2 (Semanas 3–4)

## 🎯 Objetivo: Dominio Base (User + Organization + Membership)

---

## 1️⃣ Crear Entidad User

### ➜ Definir estructura

- id
- email
- password
- state
- createdAt

### ➜ Implementar Máquina de Estados

- Crear interfaz UserState
- Crear:
  - PendingUserState
  - ActiveUserState
  - SuspendedUserState

### ➜ Implementar transiciones

- activate()
- suspend()
- changeEmail()

---

## 2️⃣ Crear Entidad Organization

### ➜ Definir estructura

- id
- name
- ownerId
- createdAt

### ➜ Validaciones

- Nombre obligatorio
- Owner obligatorio

---

## 3️⃣ Crear Entidad Membership (Núcleo Multi-Tenant)

### ➜ Definir estructura

- userId
- organizationId
- roleId
- state

### ➜ Implementar estados

- ACTIVE
- INACTIVE
- CANCELED

### ➜ Métodos

- activate()
- cancel()
- changeRole()

---

## 4️⃣ Crear Repositories (Ports)

- UserRepository
- OrganizationRepository
- MembershipRepository

---

# 🟡 SPRINT 3 (Semanas 5–6)

## 🎯 Objetivo: RBAC Jerárquico + Invitations

---

## 1️⃣ Implementar RBAC

### ➜ Crear entidad Role

- id
- name
- parentRoleId

### ➜ Crear entidad Permission

- id
- name
- description

### ➜ Implementar herencia

- Función resolveRoleHierarchy()
  - Obtener rol actual
  - Buscar padre
  - Resolver recursivamente
  - Consolidar permisos

---

## 2️⃣ Implementar Invitation

### ➜ Crear entidad Invitation

- id
- email
- organizationId
- roleId
- state

### ➜ Estados

- PENDING
- ACCEPTED
- EXPIRED
- REVOKED

---

## 3️⃣ Crear Ports adicionales

- RoleRepository
- PermissionRepository
- InvitationRepository

---

# 🟣 SPRINT 4 (Semanas 7–8)

## 🎯 Objetivo: Infrastructure (Mongo + Auth)

---

## 1️⃣ Implementar Schemas Mongoose

### ➜ Crear schemas

- user.schema.ts
- organization.schema.ts
- membership.schema.ts
- role.schema.ts
- permission.schema.ts
- invitation.schema.ts

---

## 2️⃣ Implementar Repositories Mongo

### ➜ Para cada repositorio:

- Mapear Entity → Document
- Mapear Document → Entity
- Implementar:
  - save()
  - findById()
  - findByEmail() (si aplica)
  - delete()

---

## 3️⃣ Implementar Auth Services

### ➜ PasswordService

- hashPassword()
- comparePassword()

### ➜ JwtService

- signAccessToken()
- verifyToken()

---

# 🟠 SPRINT 5 (Semanas 9–10)

## 🎯 Objetivo: Casos de Uso (Application Layer)

---

## 1️⃣ Auth Use Cases

- RegisterUser
  - Validar email
  - Hashear password
  - Guardar usuario
  - Generar token activación

- ActivateUser
- LoginUser
- RequestPasswordReset
- ResetPassword

---

## 2️⃣ Organization Use Cases

- CreateOrganization
  - Crear organización
  - Crear membership OWNER

- TransferOwnership
- DeleteOrganization

---

## 3️⃣ Membership Use Cases

- AssignRole
- ChangeMemberRole
- RemoveMember

---

## 4️⃣ Invitation Use Cases

- CreateInvitation
- AcceptInvitation
- RevokeInvitation

---

# 🟤 SPRINT 6 (Semanas 11–12)

## 🎯 Objetivo: Sistema de Emails + Interfaces HTTP

---

## 1️⃣ Sistema de Email

### ➜ Crear EmailService (Port)

### ➜ Implementar SmtpEmailAdapter

- Configurar nodemailer
- Configurar credenciales SMTP

### ➜ Integrar Motor de Plantillas

- Instalar handlebars
- Crear carpeta templates

### ➜ Crear plantillas

- invitation.hbs
- activation.hbs
- reset-password.hbs
- confirm-email-change.hbs

---

## 2️⃣ Integrar envío desde Use Cases

- Inyectar EmailService
- Disparar envío después de evento de negocio

---

## 3️⃣ Crear Controllers

- AuthController
- OrganizationController
- MembershipController
- InvitationController

---

## 4️⃣ Crear Middlewares

- AuthMiddleware
  - Extraer token
  - Validar JWT
  - Adjuntar user al request

- PermissionMiddleware
  - Resolver jerarquía
  - Validar permiso

- ErrorHandlerMiddleware

---

# ⚫ SPRINT 7 (Semanas 13–14)

## 🎯 Objetivo: Seguridad + Deploy

---

## 1️⃣ Seguridad

- Instalar helmet
- Configurar CORS
- Implementar rate limiting
- Implementar validación con Zod
- Centralizar manejo de errores

---

## 2️⃣ Logs

- Crear logger estructurado
- Registrar errores críticos
- Registrar eventos importantes

---

## 3️⃣ Deploy

### ➜ Preparar producción

- Configurar variables de entorno
- Configurar build TypeScript
- Crear script start:prod

### ➜ Subir a hosting

- Configurar servicio (Render recomendado)
- Configurar MongoDB Atlas
- Configurar dominio (opcional)

---

# 🎯 Resultado al Final de los 7 Sprints

✔ Multi-tenant real  
✔ RBAC jerárquico  
✔ Máquina de estados sin if anidados  
✔ Sistema de invitaciones  
✔ Sistema profesional de emails  
✔ Arquitectura hexagonal limpia  
✔ Backend listo para escalar  
✔ Base sólida para cualquier SaaS B2B
