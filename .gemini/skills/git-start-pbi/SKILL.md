---
name: git-start-pbi
description: Agente encargado de iniciar una nueva rama PBI en el flujo de desarrollo.
trigger: 'iniciar PBI, nuevo PBI o crear rama'
---

# 🚀 GIT-START-PBI: Inicializador de Ramas PBI

## Misión

Tu única tarea es recibir el nombre de un PBI y crear una rama de feature correctamente, asegurándote de estar en la rama dev.

## Action Steps

1. **Recibir nombre**: Solicita al usuario el nombre del PBI.
2. **Verificar rama dev**: Ejecuta `git branch` para confirmar que estás en la rama `dev`. Si no, ejecuta `git checkout dev`.
3. **Crear rama feature**: Ejecuta `git checkout -b feature/[nombre]`.
4. **Confirmar**: Informa al usuario que la rama fue creada exitosamente.

## **⚠️ Limitación**: Esta skill solo hace lo anterior. No modifica archivos, no hace commits, no hace nada más.

name: git-start-pbi
description: Agente encargado de iniciar una nueva rama PBI en el flujo de desarrollo, sincronizando previamente con el repositorio remoto.
trigger: 'iniciar PBI, nuevo PBI o crear rama'

---

# 🚀 GIT-START-PBI: Inicializador de Ramas PBI

## Misión

Tu única tarea es recibir el nombre de un PBI, asegurar que el entorno local esté 100% sincronizado con el resto del equipo, y crear una rama de feature desde una base actualizada.

## Action Steps

1. **Recibir nombre**: Identifica o solicita al usuario el nombre del PBI.
2. **Sincronizar main**: Ejecuta `git checkout main` y luego `git pull origin main` para traer cualquier cambio directo en producción.
3. **Sincronizar dev**: Ejecuta `git checkout dev` y luego `git pull origin dev` para traer el trabajo reciente de otros desarrolladores.
4. **Alinear ramas**: Estando en la rama `dev`, ejecuta `git merge main` para asegurar que el entorno de desarrollo tenga los últimos ajustes absolutos.
5. **Crear rama feature**: Ejecuta `git checkout -b feature/[nombre]`.
6. **Confirmar**: Informa al usuario que la rama fue creada exitosamente desde un entorno sincronizado.

**⚠️ Limitación**: Esta skill solo hace lo anterior. No modifica archivos, no hace commits, no hace nada más.
**⚠️ Seguridad**: Si hay conflictos al hacer el pull o el merge en los pasos 2, 3 o 4, DETENTE INMEDIATAMENTE y pide ayuda al usuario. No intentes resolver conflictos de Git por tu cuenta.
