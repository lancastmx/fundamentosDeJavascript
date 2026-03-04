# 🧩 Módulo: invitation.entity

> Documentación técnica generada para el archivo `src/modules/organization/domain/invitation.entity.ts`.

## 📂 Dependencias (Wikipedia Links)

*Este módulo no tiene dependencias internas.*

## 📝 Análisis de Lógica y Propósito de Negocio

La Entidad **`Invitation`** representa una oferta temporal asíncrona de membresía.

**Diseño de Dominio (DDD):**
- Encapsula un estado inmutable inicial (`PENDING`) y una fecha de expiración automática configurable (por defecto 7 días al futuro).
- Su método `accept()` concentra las validaciones críticas: previene que invitaciones `EXPIRED` o previamente tranzadas (`ACCEPTED`, `REJECTED`) sean reclamadas abusivamente, mutando su estado interno únicamente si las reglas cronológicas lo permiten.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*