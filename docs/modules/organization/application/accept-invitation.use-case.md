# 🧩 Módulo: accept-invitation.use-case

> Documentación técnica generada para el archivo `src/modules/organization/application/accept-invitation.use-case.ts`.

## 📂 Dependencias (Wikipedia Links)

- [membership.entity.js](./../domain/membership.entity.js.md)
- [invitation.entity.js](./../domain/invitation.entity.js.md)

## 📝 Análisis de Lógica y Propósito de Negocio

El Caso de Uso **Aceptar Invitación (`AcceptInvitationUseCase`)** orquesta el proceso mediante el cual un usuario se une oficialmente a un Tenant.

**Flujo Transaccional:**
1. Trata de recuperar la entidad `Invitation` de la base de datos (simulado).
2. Delega la validación de negocio a la propia entidad (`invitation.accept()`), permitiendo que sea la Invitación la encargada de dictaminar si está expirada o ya fue procesada.
3. Si la invitación es lícita, procede a generar una nueva `Membership`, vinculando al usuario (`userId`) con la organización huésped bajo el rol (`roleId`) estipulado en la invitación.
4. Responde con un mensaje unificado de éxito o fracaso capturando las excepciones del Dominio.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*