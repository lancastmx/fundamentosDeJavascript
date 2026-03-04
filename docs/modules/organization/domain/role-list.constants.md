# 🧩 Módulo: role-list.constants

> Documentación técnica generada para el archivo `src/modules/organization/domain/role-list.constants.ts`.

## 📂 Dependencias (Wikipedia Links)

- [permission.entity.js](./permission.entity.js.md)
- [role.entity.js](./role.entity.js.md)

## 📝 Análisis de Lógica y Propósito de Negocio

El archivo **`role-list.constants`** funciona como el "Diccionario Oficial" de Seguridad de la plataforma.

Agrupa la inicialización en memoria de toda la red de Autorización:
1. **Permisos Universales (`PERMISSIONS`):** Declara explícitamente cada acción válida en el software, desde la actualización de perfil hasta el cobro (Billing).
2. **Jerarquía Patriarcal (`SYSTEM_ROLES`):** Instancia los Roles en cadena (SELLER -> SUPERVISOR -> ADMIN -> OWNER). Facilita el mantenimiento definiendo de quién hereda un rol, inyectando solo el "delta" de permisos nuevos sobre cada escalón superior.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*