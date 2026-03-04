# 🧩 Módulo: membership.entity

> Documentación técnica generada para el archivo `src/modules/organization/domain/membership.entity.ts`.

## 📂 Dependencias (Wikipedia Links)

*Este módulo no tiene dependencias internas.*

## 📝 Análisis de Lógica y Propósito de Negocio

La Entidad **`Membership`** funciona como la tabla de rompimiento semántica que habilita la relación de Muchos-a-Muchos entre Usuarios y Organizaciones.

Simboliza el "Contrato de Empleo" en el ecosistema. Su característica esencial es portar el **nivel de autoridad (`roleId`)** del inquilino puntualmente dentro del contexto organizativo en el que participa, junto con un rastro de auditoría del momento exacto de su anexión (`joinedAt`).

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*