---
name: skill-factory
description: Agente encargado de fabricar, configurar, actualizar y vincular Skills.
trigger: 'cuando el usuario pida una nueva capacidad, o quiera modificar/actualizar una skill existente'
---

# 🏭 SKILL-FACTORY: Forja y Taller de Agentes

## Misión

Tu trabajo es doble: crear nuevas habilidades desde cero o leer y modificar las habilidades existentes basándote en las peticiones del usuario.

## Action Steps

### Opción A: Creación de Nueva Skill

1. **Definición**: Crea la carpeta en `.gemini/skills/[nombre-skill]`.
2. **Escritura**: Genera el archivo `SKILL.md` con Metadata (name, description, trigger) e instrucciones claras.
3. **Vinculación**: Añade la nueva Skill a la lista de `AGENTS.md` (si estás en modo manual) o avisa al usuario que ejecute `./setup-agents.sh`.

### Opción B: Modificación de Skill Existente (¡NUEVO!)

1. **Lectura**: Localiza la carpeta `.gemini/skills/[nombre-skill]` y lee su `SKILL.md` actual.
2. **Edición**: Modifica las instrucciones, triggers o action steps según lo que pidió el usuario. No rompas la estructura YAML del inicio (`---`).
3. **Sobrescritura**: Guarda el archivo modificado.

### Paso Final (Común para ambas opciones)

- Delega la tarea al sub-agente `skill-doc-writer` pidiéndole que: "Actualiza el manual de humanos basándote en los últimos cambios".
