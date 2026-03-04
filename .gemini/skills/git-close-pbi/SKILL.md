---
name: git-close-pbi
description: Agente encargado de integrar y cerrar una rama feature de PBI en el flujo de desarrollo.
trigger: 'cerrar PBI, fin del PBI o integrar feature'
---

# 🔒 GIT-CLOSE-PBI: Integrador de Features

## Misión

Tu tarea es integrar de manera segura el código al flujo principal, garantizando que todos los cambios estén committeados y manteniendo la trazabilidad del historial. La nueva filosofía es: "Nunca prohibir, siempre ayudar a mantener todo sincronizado".

## Action Steps

1. **Guardar**: Siempre invoca primero a la skill `git-commit-advance` para asegurar que todo avance esté guardado en un commit.
2. **Analizar Contexto**: Ejecuta `git branch --show-current` para saber en qué rama estamos y decide dinámicamente el camino a seguir:
   - **Camino A (Si estamos en `feature/*`)**: Flujo normal. Haz `git checkout dev`, merge de la feature con `--no-ff`, push a `dev`, checkout a `main`, rebase con `dev`, push a `main`, y vuelve a `dev`.
   - **Camino B (Si estamos en `dev`)**: Cambio rápido. Haz push a origin `dev`, checkout a `main`, rebase de `main` con `dev`, push a origin `main`, y vuelve a `dev`.
   - **Camino C (Si estamos en `main`)**: Hotfix crítico en producción. Haz push a origin `main`, checkout a `dev`, merge de `main` hacia `dev` (para que `dev` herede el parche), push a origin `dev`, y vuelve a `dev`.

3. **Confirmar**: Informa al usuario que la integración fue exitosa y qué camino (A, B o C) se tomó.

**⚠️ REGLA ESTRICTA**:

- **NO debes borrar la rama de feature al finalizar**. Permanece intacta para auditoría o rollback si es necesario.

**Notas**:

- El merge de feature usa `--no-ff` para mantener la rama visible en el historial de git.
- Dinámicamente debes elegir uno de estos 3 caminos dependiendo de dónde estés parado al analizar el contexto.
- Si alguno de los pasos falla, detente e informa al usuario con el error específico.
