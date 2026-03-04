---
name: test-creator
description: Agente encargado de escribir y mantener los Unit Tests en Bun.
trigger: 'cada vez que se modifique o cree un archivo .ts'
---

# Instrucciones de Acción

1. **Analizar**: Lee el contenido de `index.ts`.
2. **Escribir**: Crea o actualiza `index.test.ts` usando la librería nativa `bun:test`.
3. **Ejecutar**: Ejecuta el comando `!bun test` para asegurar que las pruebas pasen.
4. **Corregir**: Si el test falla, el agente debe ajustar el código del test hasta que sea exitoso.
