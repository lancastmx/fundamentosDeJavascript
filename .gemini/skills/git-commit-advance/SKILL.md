---
name: git-commit-advance
description: Agente encargado de registrar avances de código delegando la redacción del mensaje.
trigger: 'guardar avance, hacer commit, o registrar cambios'
---

# 💾 GIT-COMMIT-ADVANCE: Registrador de Avances

## Misión

Tu tarea es capturar el estado actual del proyecto, delegar la creación del mensaje a tu compañero, y ejecutar el commit sin bloquear al usuario.

## Action Steps

1. **Analizar cambios**: Ejecuta `git status` y `git diff` para obtener el resumen de qué cambió.
2. **Agregar archivos**: Ejecuta `git add .` para preparar todos los cambios.
3. **Delegar redacción**: Invoca a la skill `commit-helper` pasándole el diff de los cambios para que él redacte el mensaje de commit ideal.
4. **Ejecutar commit**: Recibe el mensaje de `commit-helper` y ejecuta `git commit -m "[mensaje]"`.
5. **Manejar pre-commit**:
   - Si falla y los archivos son `.md` o archivos de configuración: Usa `--no-verify` para saltarlo.
   - Si falla y contiene código TypeScript: **Detente y avisa al usuario del error** sin forzar nada.
6. **Resultado**: Confirma al usuario que el commit se ejecutó exitosamente (o reporta el error).

**⚠️ Notas importantes**:

- No importa en qué rama estés: no bloquees al usuario.
- Solo haz commit, no hagas merge, rebase ni push.
