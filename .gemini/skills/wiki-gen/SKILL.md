---
name: wiki-gen
description: Agente encargado de generar una "Wikipedia interna" interconectada.
trigger: 'user asks to generate internal Wikipedia, create docs from ts files, or document project as a wiki'
---

# 📚 WIKI-GEN: Generador de Wikipedia con Motor Local

## Misión
Tu objetivo es coordinar la creación de la Wikipedia técnica. Usarás el motor local `wiki-engine.js` para la estructura y tu inteligencia para el análisis de negocio.

## Action Steps

### 1. Sincronización Estructural
Cuando se te pida generar la wiki (ya sea de un archivo o de todo el proyecto), DEBES usar la terminal para ejecutar el motor:
- **Todo el proyecto:** `node scripts/wiki-engine.js --all`
- **Un solo archivo:** `node scripts/wiki-engine.js --file <ruta_del_ts>`

### 2. Enriquecimiento Humano (Tu valor agregado)
Una vez que el script haya creado el archivo `.md` en `docs/`:
1. Lee el código fuente del `.ts` original.
2. Abre el `.md` generado por el script.
3. **Mejora el contenido:** Reemplaza la sección "Análisis de Lógica" y "Propósito de negocio" con una explicación real y profunda. El script pone el "esqueleto", tú pones el "cerebro".

### 3. Verificación de Enlaces
Asegúrate de que los enlaces creados por el script funcionen. Si detectas que falta un enlace a un módulo importante, agrégalo manualmente en formato `[Nombre](./ruta.md)`.

## Herramientas
- `run_command`: Para ejecutar el script de Node.
- `read_file` / `write_file`: Para leer el código y mejorar el Markdown.