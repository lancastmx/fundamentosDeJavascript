# 🧩 Módulo: auth.service

> Documentación técnica generada para el archivo `src/modules/auth/application/auth.service.ts`.

## 📂 Dependencias (Wikipedia Links)

*Este módulo no tiene dependencias internas.*

## 📝 Análisis de Lógica y Propósito de Negocio

El **Servicio de Autenticación (`AuthService`)** es el director de toda la lógica criptográfica para el ingreso al sistema.

**Responsabilidades Core:**
- **Estándar OAuth2:** Implementa la construcción y firmado de tokens simulando la separación entre un `Access Token` (vida corta, transaccional, inyectado via 'Bearer') y un `Refresh Token` (identificador largo para renovaciones seguras).
- **Inyección de Payload:** Engloba metadatos valiosos (`userId`, `role`, `orgId`) en el cuerpo del token para evitar constantes llamadas a base de datos durante las autorizaciones de las rutas privadas.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*