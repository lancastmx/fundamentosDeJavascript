# 🧩 Módulo: user.entity

> Documentación técnica generada para el archivo `src/modules/user/domain/user.entity.ts`.

## 📂 Dependencias (Wikipedia Links)

- [user-state.interface.js](./user-state.interface.js.md)
- [pending-user.state.js](./states/pending-user.state.js.md)
- [user-profile.model.js](./user-profile.model.js.md)

## 📝 Análisis de Lógica y Propósito de Negocio

La Entidad `User` es el núcleo de este módulo dentro del marco de **Diseño Guiado por el Dominio (DDD)**.

**Características principales:**
- **Identidad Constante:** Nace con un ID permanente y atributos privados empaquetados, exponiéndolos solo en modo lectura para uso de los Repositorios de infraestructura.
- **Máquina de Estados Interna:** Incorpora por defecto el comportamiento `PendingUserState` en su constructor y expone métodos (`activate`, `suspend`) que se delegan en el estado actual; controlando el flujo de acciones transaccionales del cliente de manera limpia.
- **Gestión de Perfil Segura:** Agrupa detalles variables en un objeto `UserProfile`. Modificarlo crea siempre una copia inmutable temporal gracias a la propagación (`...this._profile`), previniendo efectos secundarios colaterales.

Es un Objeto Rico (Rich Model), combinando estado y comportamiento, asegurando las reglas del tenant B2B.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*