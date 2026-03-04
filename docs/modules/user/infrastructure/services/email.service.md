# 🧩 Módulo: email.service

> Documentación técnica generada para el archivo `src/modules/user/infrastructure/services/email.service.ts`.

## 📂 Dependencias (Wikipedia Links)

- [config.js](./../../../../config.js.md)
- [verification.template.js](./templates/verification.template.js.md)
- [invitation.template.js](./templates/invitation.template.js.md)
- [password-reset.template.js](./templates/password-reset.template.js.md)
- [password-changed.template.js](./templates/password-changed.template.js.md)

## 📝 Análisis de Lógica y Propósito de Negocio

El **Servicio de Correos Electrónicos (`EmailService`)** maneja la arquitectura de notificaciones transaccionales salientes para Prayser / Kyclops.

Actúa como una envoltura de las plantillas (templates) combinándolas de forma agnóstica para:
- **Verificaciones:** Manda el enlace del token de opt-in original tras un registro.
- **Invitaciones a Organizaciones:** Prepara URLs específicas para que un tercero se una a grupos corporativos (flujo B2B).
- **Recuperación y Alertas:** Administra reinicios y alertas preventivas de contraseñas.
- Centraliza la delegación del protocolo subyacente (ej. SMTP) a un único método privado estandarizado `send()`.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*