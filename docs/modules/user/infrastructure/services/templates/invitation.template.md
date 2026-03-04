# 🧩 Módulo: invitation.template

> Documentación técnica generada para el archivo `src/modules/user/infrastructure/services/templates/invitation.template.ts`.

## 📂 Dependencias (Wikipedia Links)

*Este módulo no tiene dependencias internas.*

## 📝 Análisis de Lógica y Propósito de Negocio

Plantilla estática (Template) para el envío de **Invitaciones B2B**.

Proporciona la estructura HTML base para notificar a un nuevo o existente usuario que ha sido invitado a unirse a un entorno (`Organization`) bajo la tutela de un propietario (`inviterName`). Genera dinámicamente un Call To Action (botón) que redirige al flujo de unión (`auth/join`) con un token seguro incrustado en la URL.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*