# 🧩 Módulo: user.model

> Documentación técnica generada para el archivo `src/modules/user/infrastructure/models/user.model.ts`.

## 📂 Dependencias (Wikipedia Links)

- [user-profile.model.js](./../../domain/user-profile.model.js.md)

## 📝 Análisis de Lógica y Propósito de Negocio

El **Modelo de Mongoose (`UserModel`)** define estricta y declarativamente el Esquema (Schema) físico con el que un usuario se guarda en la Base de Datos.

**Atributos Técnicos:**
- Implementa directamente la interfaz TypeScript `IUserDocument`.
- Incluye el estampillado automático de tiempos `timestamps: true` (createdAt, updatedAt).
- Aloja el Hook `pre('save')` para el formateo de contraseñas. *(Nota: Por el momento se evita usar en favor de la encriptación paralela en el Repositorio)*.

Es el componente clave que Mongoose utiliza para transaccionar operaciones con el cluster.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*