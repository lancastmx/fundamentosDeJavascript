# 🤖 Manual de Herramientas para Humanos (Agentes)

Este manual describe las habilidades (skills) disponibles en el sistema y cómo invocarlas.

## 🛠️ COMMIT-HELPER

- **¿Qué hace?**: Especialista en documentar código y redactar mensajes de commit convencionales.
- **¿Cómo lo uso?**: Di algo como: *"redactar mensaje de commit, documentar código"*
- **Resultado**: Ejecuta la acción definida para esta habilidad en el proyecto.

## 🛠️ TEST-CREATOR

- **¿Qué hace?**: Agente encargado de escribir y mantener los Unit Tests en Bun.
- **¿Cómo lo uso?**: Di algo como: *"cada vez que se modifique o cree un archivo .ts"*
- **Resultado**: Ejecuta la acción definida para esta habilidad en el proyecto.

## 🛠️ DOC-EXPERT

- **¿Qué hace?**: Agente de documentación técnica externa. Genera manuales en Markdown.
- **¿Cómo lo uso?**: Di algo como: *"cuando el usuario pida documentar archivos o módulos"*
- **Resultado**: Ejecuta la acción definida para esta habilidad en el proyecto.

## 🛠️ SKILL-FACTORY

- **¿Qué hace?**: Agente encargado de fabricar, configurar, actualizar y vincular Skills.
- **¿Cómo lo uso?**: Di algo como: *"cuando el usuario pida una nueva capacidad, o quiera modificar/actualizar una skill existente"*
- **Resultado**: Ejecuta la acción definida para esta habilidad en el proyecto.

## 🛠️ LOGGER-GEN

- **¿Qué hace?**: Agente encargado de insertar automáticamente logs de seguimiento en funciones críticas.
- **¿Cómo lo uso?**: Di algo como: *"al crear o modificar funciones importantes, o cuando el usuario ponga '// generar logs' sobre una función"*
- **Resultado**: Ejecuta la acción definida para esta habilidad en el proyecto.

## 🛠️ SKILL-DOC-WRITER

- **¿Qué hace?**: Agente encargado de redactar el manual de herramientas para humanos (MANUAL_AGENTE.md) basándose en las skills configuradas.
- **¿Cómo lo uso?**: Di algo como: *"al solicitar crear o actualizar el manual de agentes"*
- **Resultado**: Ejecuta la acción definida para esta habilidad en el proyecto.

## 🛠️ GIT-CLOSE-PBI

- **¿Qué hace?**: Agente encargado de integrar y cerrar una rama feature de PBI en el flujo de desarrollo.
- **¿Cómo lo uso?**: Di algo como: *"cerrar PBI, fin del PBI o integrar feature"*
- **Resultado**: Ejecuta la acción definida para esta habilidad en el proyecto.

## 🛠️ GIT-COMMIT-ADVANCE

- **¿Qué hace?**: Agente encargado de registrar avances de código delegando la redacción del mensaje.
- **¿Cómo lo uso?**: Di algo como: *"guardar avance, hacer commit, o registrar cambios"*
- **Resultado**: Ejecuta la acción definida para esta habilidad en el proyecto.

## 🛠️ GIT-START-PBI

- **¿Qué hace?**: Agente encargado de iniciar una nueva rama PBI en el flujo de desarrollo.
- **¿Cómo lo uso?**: Di algo como: *"iniciar PBI, nuevo PBI o crear rama"*
- **Resultado**: Ejecuta la acción definida para esta habilidad en el proyecto.

## 🛠️ TODO-SCANNER

- **¿Qué hace?**: Herramienta que escanea y recopila TODOs y FIXMEs del proyecto
- **¿Cómo lo uso?**: Di algo como: *"cuando el usuario pida escanear tareas pendientes o TODOs"*
- **Resultado**: Ejecuta la acción definida para esta habilidad en el proyecto.

## 🛠️ README-ARCHITECT

- **¿Qué hace?**: Agente experto en extraer arquitectura (DDD/Hexagonal) de directorios del proyecto y documentarlo en el README.md
- **¿Cómo lo uso?**: Di algo como: *"'cuando el usuario proporcione una o más rutas de directorios y pida explicar, extraer o documentar la arquitectura (DDD/Hexagonal) en el README.md'"*
- **¿Resultado**: Ejecuta la acción definida para esta habilidad en el proyecto.

## 🛠️ WIKI-GEN

- **¿Qué hace?**: Agente encargado de generar una "Wikipedia interna" del proyecto escrita para humanos, basada en el análisis de los archivos `.ts`.
- **¿Cómo lo uso?**: Di algo como: *"generar la wikipedia interna", "crear documentación estilo wiki", "documentar el proyecto como una wiki"*
- **Resultado**: Crea o actualiza archivos `.md` en la carpeta `docs/` con cross-links estilo Wikipedia basados en los imports del código.
