# 🧩 Módulo: user-state.interface

> Documentación técnica generada para el archivo `src/modules/user/domain/user-state.interface.ts`.

## 📂 Dependencias (Wikipedia Links)

- [user.entity.js](./user.entity.js.md)

## 📝 Análisis de Lógica y Propósito de Negocio

La interfaz `UserState` es el **Contrato Base** del Patrón de Estado (State Pattern) aplicado a la entidad `User`.

Exige a todos los estados concretos implementar una forma de:
- Retornar su propio nombre mediante `getName()`.
- Reaccionar a eventos de ciclo de vida (`activate`, `suspend`) y delegar la responsabilidad de la transición de estado al propio objeto `User`.
- Declarar reglas explícitas ante la intención de cambiar el correo electrónico (`changeEmail`).

Gracias a esto, la Entidad Usuario no requiere albergar lógica condicional basada en su estado, dejando que las clases concretas resuelvan si una acción es válida o arrojen una excepción de negocio.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*