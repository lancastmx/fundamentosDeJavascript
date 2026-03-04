---
name: skill-doc-writer
description: Agente encargado de redactar el manual de herramientas para humanos (MANUAL_AGENTE.md) basándose en las skills configuradas.
trigger: 'al solicitar crear o actualizar el manual de agentes'
---

# Instrucciones de Acción

1. **Escanear**: Lee todas las subcarpetas y archivos `SKILL.md` dentro de `.gemini/skills/`.
2. **Traducir**: Por cada `SKILL.md` encontrado, redacta una sección en español claro para humanos.
3. **Estructurar**: El archivo de salida debe ser `docs/MANUAL_AGENTE.md`. Por cada habilidad encontrada, debes basarte en la metadata (description, trigger) y las instrucciones principales para documentar exactamente:
   - **¿Qué hace?**: Propósito sencillo de la skill.
   - **¿Cómo lo uso?**: La frase o comando exacto para activarlo (basado en el campo `trigger`).
   - **Resultado**: Qué archivos crea o modifica en el proyecto.
4. **Finalizar**: Notifica al usuario que el manual fue generado exitosamente listando brevemente las skills procesadas.
