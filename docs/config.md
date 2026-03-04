# 🧩 Módulo: config

> Documentación técnica generada para el archivo `src/config.ts`.

## 📂 Dependencias (Wikipedia Links)

*Este módulo no tiene dependencias internas.*

## 📝 Análisis de Lógica y Propósito de Negocio

Este archivo es el **Punto Central de Configuración** de la aplicación Prayser.
Su propósito es centralizar la gestión de variables de entorno (usando `dotenv`) para asegurar que todo el sistema tenga acceso unificado y validado a la configuración. 

Agrupa la configuración en dominios lógicos:
- **Server**: Configuración de puerto y ambiente de ejecución.
- **Database**: Cadena de conexión a MongoDB.
- **Auth**: Secretos JWT y tiempos de expiración para la seguridad.
- **SMTP**: Credenciales para el envío de correos.

Evita que los módulos esparzan accesos a `process.env` y garantiza una única fuente de verdad.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*