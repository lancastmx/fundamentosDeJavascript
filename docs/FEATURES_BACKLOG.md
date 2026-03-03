# 🚀 Futuras Funcionalidades (Backlog)

## 1. Protocolo de Herencia de Datos (Offboarding)

**Caso de uso:** Cuando un usuario deja la organización.
**Lógica sugerida:**

- Identificar al `supervisorId` en la `Membership`.
- Ejecutar un script de base de datos que haga un `updateMany` en los registros (clientes, ventas) cambiando el `ownerId` del usuario saliente al supervisor.
- **Estado actual:** Postergado para mantener el Core simple.
