# 🧩 Módulo: role.entity

> Documentación técnica generada para el archivo `src/modules/organization/domain/role.entity.ts`.

## 📂 Dependencias (Wikipedia Links)

- [permission.entity.js](./permission.entity.js.md)

## 📝 Análisis de Lógica y Propósito de Negocio

La Entidad **`Role`** encapsula la agrupación lógica de permisos (Permissions) aplicable a un usuario.

**Estructura Jerárquica:**
Destaca por su atributo opcional `parentRoleId`, habilitando el patrón compuesto donde un Rol de jerarquía superior hereda tácitamente los permisos de su predecesor, más sus facultades únicas asignadas.
Cuenta con metodos sencillos (`hasDirectPermission`) para validaciones estáticas superficiales de primer grado.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*