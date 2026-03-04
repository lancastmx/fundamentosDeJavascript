#!/bin/bash
# Directorio donde Gemini CLI buscará las skills
LOCAL_SKILLS_DIR=".gemini/skills"
AGENTS_FILE="AGENTS.md"

echo "🚀 Iniciando configuración de entorno tipo 'Tony Stark'..."

# 1. Limpiar enlaces rotos previos si existen
find "$LOCAL_SKILLS_DIR" -type l -delete 2>/dev/null

# 2. Crear la estructura base
mkdir -p "$LOCAL_SKILLS_DIR"

# 3. Lógica de Vinculación (Symlinks Relativos)
GLOBAL_SOURCE="../../mis-skills-maestras" 

if [ -d "$GLOBAL_SOURCE" ]; then
    echo "🔗 Vinculando skills desde carpeta maestra..."
    for skill in "$GLOBAL_SOURCE"/*; do
        if [ -d "$skill" ]; then
            skill_name=$(basename "$skill")
            ln -sf "../../$GLOBAL_SOURCE/$skill_name" "$LOCAL_SKILLS_DIR/$skill_name"
        fi
    done
else
    echo "⚠️ No se encontró carpeta maestra. Usando modo 'Portátil'."
fi

# 4. Regenerar AGENTS.md dinámicamente (El Router Inteligente)
echo "🧠 Construyendo tabla de enrutamiento dinámico..."

cat << 'EOF' > "$AGENTS_FILE"
# 🧠 SYSTEM: Orchestrator Router

You are the Orchestrator. Your ONLY job is to analyze the user's prompt, identify the correct trigger, and load the specific skill context. Do NOT load all skills at once. Do NOT execute the task directly; delegate it.

## 🔀 Skill Routing Table (Triggers)
Match the user's action/request with the triggers below to load the correct skill path:
EOF

for dir in "$LOCAL_SKILLS_DIR"/*; do
    if [ -d "$dir" ] || [ -L "$dir" ]; then
        skill_name=$(basename "$dir")
        skill_file="$dir/SKILL.md"
        
        # Extraer el trigger del archivo SKILL.md usando grep y sed
        if [ -f "$skill_file" ]; then
            trigger=$(grep "^trigger:" "$skill_file" | sed "s/^trigger:[ \'\"]*//;s/[ \'\"]*$//")
        else
            trigger="user requires the $skill_name tool"
        fi
        
        echo "- **IF** $trigger:" >> "$AGENTS_FILE"
        echo "  -> LOAD: \`$LOCAL_SKILLS_DIR/$skill_name/\`" >> "$AGENTS_FILE"
    fi
done
# 5. Actualizar la Wikipedia técnica
if [ -f "scripts/wiki-engine.js" ]; then
    echo "📚 Sincronizando Wikipedia técnica..."
    node scripts/wiki-engine.js --all
fi
cat << 'EOF' >> "$AGENTS_FILE"

## ⚙️ Execution Protocol
1. Identify the Trigger from the Routing Table.
2. Silently read the `SKILL.md` (or `README.md`) inside the matching `.gemini/skills/` directory.
3. Execute the exact instructions defined within that specific skill.
EOF

echo "✅ Enrutador AGENTS.md regenerado con inteligencia."
echo "🤖 RECORDATORIO: Para actualizar el manual humano, dile al agente: 'Actualiza el manual de agentes'."