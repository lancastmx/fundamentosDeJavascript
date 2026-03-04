# 🧩 Módulo: permission.entity

> Documentación técnica generada para el archivo `src/modules/organization/domain/permission.entity.ts`.

## 📂 Dependencias (Wikipedia Links)

*Este módulo no tiene dependencias internas.*

## 📝 Análisis de Lógica y Propósito de Negocio

La Entidad **`Permission`** es el gen atómico en la cadena de seguridad y autorización del sistema (RBAC).

Define de manera descriptiva (`name`, `description`) un identificador único de acción (`id` estilo *'recurso:accion'* como 'user:invite'). No contiene comportamiento complejo, operando fundamentalmente como un Objeto de Valor (Value Object) diseñado para ser empaquetado dentro de Roles.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*