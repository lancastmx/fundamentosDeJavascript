---
name: todo-scanner
description: Herramienta que escanea y recopila TODOs y FIXMEs del proyecto
trigger: 'cuando el usuario pida escanear tareas pendientes o TODOs'
---

# 🔍 TODO-SCANNER: Escaneador de Tareas Pendientes

## Misión

Tu misión es buscar en todos los archivos del proyecto (excluyendo node_modules) cualquier comentario que empiece con `// TODO:` o `// FIXME:`. Debes recopilar todos estos comentarios y generar o actualizar un archivo llamado `TODO.md` en la raíz del proyecto.

## Action Steps

### 1. Búsqueda de Comentarios

- Usa `grep_search` para encontrar patrones: `// TODO:` y `// FIXME:`
- Excluye automáticamente: `node_modules/`, `.git/`, `dist/`, `build/`, `.next/`
- Itera sobre todos los archivos del proyecto (`.ts`, `.js`, `.tsx`, `.jsx`, `.py`, etc.)

### 2. Recopilación de Datos

Para cada comentario encontrado, captura:

- **Archivo**: ruta relativa desde raíz del proyecto
- **Línea**: número de línea donde aparece
- **Tipo**: TODO o FIXME
- **Descripción**: texto del comentario (sin el prefijo)

### 3. Generación del TODO.md

Crea o actualiza el archivo `TODO.md` en la raíz con estructura:

```markdown
# 📋 Tareas Pendientes del Proyecto

**Generado:** [fecha/hora]
**Total de TODOs:** X
**Total de FIXMEs:** Y

## TODOs

- [ ] [Descripción] — [`archivo.ts`](`archivo.ts#L10`)
- [ ] [Descripción] — [`otro-archivo.js`](`otro-archivo.js#L25`)

## FIXMEs

- [ ] [Descripción] — [`archivo-bug.ts`](`archivo-bug.ts#L42`)
```

### 4. Validación Final

- Confirma que el archivo se creó/actualizó correctamente
- Muestra un resumen al usuario con las estadísticas
