# 🛡️ Sistema de Autoridad: RBAC Jerárquico - Kyclops Studio

Este documento detalla la implementación del control de acceso basado en roles (RBAC) diseñado para escalar en un entorno SaaS Multi-tenant.

---

## 👑 Jerarquía de Roles y Herencia

El sistema utiliza una **herencia lineal ascendente**. Esto significa que un rol de nivel superior posee, por definición, todos los permisos de los roles inferiores.

| Rol            | Hereda de    | Responsabilidad Principal                                            |
| :------------- | :----------- | :------------------------------------------------------------------- |
| **OWNER**      | `ADMIN`      | Control total de la organización, facturación y borrado lógico.      |
| **ADMIN**      | `SUPERVISOR` | Gestión de equipo, envío de invitaciones y configuración de empresa. |
| **SUPERVISOR** | `SELLER`     | Supervisión de catálogos y acceso a reportes de rendimiento.         |
| **SELLER**     | (Ninguno)    | Operaciones básicas y gestión de perfil personal.                    |

---

## ⚙️ El Motor de Permisos (`RbacService`)

Para mantener la flexibilidad (Arquitectura Hexagonal), el sistema no valida "nombres de roles", sino **permisos atómicos (acciones)**.

### Lógica de Resolución Recursiva

El método `getPermissionsForRole` realiza una búsqueda en profundidad:

1. Identifica los permisos directos del rol solicitado.
2. Si existe un `parentRoleId`, invoca la función de forma recursiva.
3. Consolida un `Set` único de permisos para evitar duplicados.

**Resultado:** Si añades un permiso al rol `SELLER`, el `OWNER` lo recibe automáticamente sin tocar una sola línea de código adicional.

---

## 📩 Flujo de Invitaciones y Límites de Negocio

La creación de nuevos miembros está sujeta a reglas de dominio estrictas:

1. **Autoridad:** Solo usuarios con el permiso `user:invite` pueden disparar el proceso.
2. **Capacidad (Plan):** El sistema consulta la entidad `Organization` para validar si el conteo actual de invitaciones es menor al límite del plan (Ej: 15 para el plan **BASIC**).
3. **Persistencia Temporal:** La invitación se guarda con estado `PENDING` y expira automáticamente tras 7 días si no es procesada.

---

## 🛠️ Guía de Mutación (Cambio de Giro)

Si el negocio cambia de industria (ej. de Ventas a Marketing Digital), el desarrollador solo debe:

1. Actualizar `PERMISSIONS` en `role-list.constants.ts` con acciones como `social:post` o `ads:manage`.
2. Reasignar los permisos a los roles correspondientes.
3. **El motor (`RbacService`) y los Use Cases no requieren cambios.**

---

## ⚠️ Reglas de Oro

- **Prohibido:** Hardcodear roles como `if (role === 'OWNER')`.
- **Obligatorio:** Verificar siempre acciones mediante `if (rbac.hasPermission(role, 'permiso:accion'))`.
