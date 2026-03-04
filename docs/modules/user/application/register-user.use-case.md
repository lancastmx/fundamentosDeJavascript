# 🧩 Módulo: register-user.use-case

> Documentación técnica generada para el archivo `src/modules/user/application/register-user.use-case.ts`.

## 📂 Dependencias (Wikipedia Links)

- [user.entity.js](./../domain/user.entity.js.md)
- [organization.entity.js](./../../organization/domain/organization.entity.js.md)
- [membership.entity.js](./../../organization/domain/membership.entity.js.md)
- [email.service.js](./../infrastructure/services/email.service.js.md)

## 📝 Análisis de Lógica y Propósito de Negocio

El Caso de Uso **Register** orquesta la creación completa del ecosistema necesario para un nuevo usuario inquilino (tenant) en la plataforma B2B.

**Flujo de Dominio:**
1. **Creación de Identidad:** Inicializa la entidad `User` generando un identificador único.
2. **Creación de Entorno (Workspace):** Genera una nueva `Organization` ligada al nuevo identificador como entidad creadora.
3. **Asignación de Membresía:** Crea una entidad `Membership`, enlazando fuertemente al usuario con la organización y concediéndole automáticamente el rol máximo: `OWNER`.
4. **Proceso de Doble Opt-in:** Dispara un evento de infraestructura ordenando al `EmailService` el envío de un correo con un token aleatorio para verificar el correo electrónico del usuario.

Este comportamiento asegura que ningún usuario quede suelto o sin organización asignada al registrarse.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*