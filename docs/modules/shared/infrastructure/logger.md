# 🧩 Módulo: logger

> Documentación técnica generada para el archivo `src/modules/shared/infrastructure/logger.ts`.

## 📂 Dependencias (Wikipedia Links)

*Este módulo no tiene dependencias internas.*

## 📝 Análisis de Lógica y Propósito de Negocio

El **Logger Compartido** es una utilidad transversal de la capa de infraestructura diseñada para centralizar y estandarizar la salida de diagnósticos del sistema. 

**Características principales:**
- **Control de Entornos:** Los niveles `info` y `warn` están restringidos para no imprimir en el entorno de `production`, manteniendo limpios los logs en servidores productivos.
- **Trazabilidad de Errores:** El nivel `error` imprime incondicionalmente, garantizando que excepciones críticas o fallos de base de datos siempre queden expuestos para el monitoreo en la nube.
- **Soporte de Contexto:** Las firmas permiten pasar metadatos (como el `context`) para ubicar rápidamente de qué capa o módulo provino el log.

--- 
*Documentación enriquecida por el Agente de Wiki-Gen*