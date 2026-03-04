# 🧩 Módulo: user.controller

> Documentación técnica generada para el archivo `src/modules/user/infrastructure/controllers/user.controller.ts`.

## 📂 Dependencias (Wikipedia Links)

- [user.entity.js](./../../domain/user.entity.js.md)
- [user.repository.js](./../../domain/user.repository.js.md)

## 📝 Análisis de Lógica y Propósito de Negocio

El **Controlador de Usuario (`UserController`)** funciona como la pasarela entre las peticiones HTTP del cliente y los casos de uso / dominio de la aplicación.

**Flujo Principal (Registro):**
1. Recibe y desempaqueta los datos (`req.body`).
2. Interactúa como director instanciando la Entidad de Dominio `User` nativa (inyectando lógica pura).
3. Delega la persistencia al `UserRepository`.
4. Responde con un estatus estandarizado (`201 Created`) o con un `400 Bad Request` extrayendo el mensaje si alguna regla de negocio falló o duplicidad se desencadenó.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*