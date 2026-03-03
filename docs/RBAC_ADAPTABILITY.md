# 📖 Guía de Adaptabilidad: Roles y Permisos (RBAC)

Este documento describe la arquitectura del sistema de autoridad de **Kyclops Studio** y cómo "mutar" el modelo de negocio sin tocar el núcleo del servidor.

---

## 🧠 El Concepto: Motor vs. Combustible

Nuestra arquitectura hexagonal separa la **lógica** de los **datos**:

1. **El Motor (`RbacService`):** Es el código puro que sabe procesar la herencia recursiva. Este archivo es **inmutable**; no importa si vendes zapatos o gestionas redes sociales, el motor siempre funcionará igual.
2. **El Combustible (`role-list.constants.ts`):** Es la lista de roles y permisos. Este es el **único lugar** donde realizas cambios para pivotar de industria.

---

## 🛠️ Cómo realizar una "Mutación" de Negocio

Si decides cambiar de un CRM de ventas a una **Agencia de Marketing Digital**, los pasos son:

### 1. Definir nuevos Permisos Semánticos

En lugar de nombres técnicos, usa acciones de negocio. Esto permite que el backend sea agnóstico a la interfaz.

```typescript
// Ejemplo de nuevos permisos para Marketing:
export const PERMISSIONS = {
  SOCIAL_POST: new Permission(
    'social:post',
    'Publicar en Redes',
    'Permite postear en perfiles vinculados.'
  ),
  AD_MANAGE: new Permission(
    'ads:manage',
    'Gestionar Pauta',
    'Crear y editar campañas pagadas.'
  ),
};
```

2. Redefinir la Jerarquía de RolesModifica la constante SYSTEM_ROLES. Gracias al campo parentRoleId, la autoridad fluye hacia arriba automáticamente.TypeScript// Ejemplo de jerarquía para Agencia:
   new Role('CREATOR', 'Creador de Contenido', [PERMISSIONS.SOCIAL_POST]),
   new Role('STRATEGIST', 'Estratega', [PERMISSIONS.AD_MANAGE], 'CREATOR') // Hereda de Creator
   🌍 Ejemplo: De Ventas a MarketingElementoIndustria Actual (Ventas)Nueva Industria (Marketing)Permiso Baseprofile:updateprofile:updatePermiso Operativocatalog:managesocial:postPermiso Gerencialuser:invitecampaign:approveRol MáximoOWNERAGENCY_OWNER📈 Escalabilidad: Hacia la Base de Datos (MongoDB)Si el negocio crece y necesitas que tus clientes creen sus propios roles (como en Slack o Discord), la transición es transparente:Persistencia: Se mueven las constantes de role-list.constants.ts a una colección de MongoDB.Consumo: El RbacService se actualiza para recibir los roles desde un Repository en lugar de una constante.Estabilidad: Los Use Cases y las Entidades no cambian, ya que ellos solo preguntan: "¿Tiene este permiso?".⚠️ Reglas de Oro para el DesarrolladorVerificar Permisos, no Roles: Nunca escribas if (role === 'ADMIN'). Escribe siempre if (rbac.hasPermission(role, 'org:update')).Herencia Lineal: Mantén la jerarquía clara. Un rol solo debe tener un padre para evitar conflictos de permisos circulares.Nombres Semánticos: Los IDs de los permisos deben ser verbo:recurso (ej. user:invite).
