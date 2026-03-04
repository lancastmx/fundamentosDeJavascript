# 🧩 Módulo: rbac.service

> Documentación técnica generada para el archivo `src/modules/organization/domain/services/rbac.service.ts`.

## 📂 Dependencias (Wikipedia Links)

- [role.entity.js](./../role.entity.js.md)

## 📝 Análisis de Lógica y Propósito de Negocio

El **Servicio de Control de Acceso Basado en Roles (`RbacService`)** es el motor recursivo para las decisiones de autorización.

**Lógica Clave:**
Resuelve magistralmente la herencia de permisos llamándose a sí mismo (`getPermissionsForRole`) para desglosar tanto los permisos directos como los del "padre" en una estructura de árbol, consolidándolos (evitando duplicados mediante Set). Finalmente provee la capa principal de consulta `hasPermission()` que los Controladores o Casos de Uso invocarán activamente.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*