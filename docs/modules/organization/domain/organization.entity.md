# 🧩 Módulo: organization.entity

> Documentación técnica generada para el archivo `src/modules/organization/domain/organization.entity.ts`.

## 📂 Dependencias (Wikipedia Links)

- [organization-plan.model.js](./organization-plan.model.js.md)
- [organization-plan.model.js](./organization-plan.model.js.md)

## 📝 Análisis de Lógica y Propósito de Negocio

La Entidad **`Organization`** (Tenant) es la base estructural del modelo B2B en Prayser.

Almacena el núcleo identificable de una empresa o equipo (`name`, `ownerId`).
Posee lógica embebida vinculada indirectamente con facturación, exponiendo la validación `canInvite(currentInvitations)` que previene el crecimiento desbordado de la organización dependiendo de su tipo de suscripción (`PlanType`: BASIC, PRO).

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*