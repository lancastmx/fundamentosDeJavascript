# 📜 Protocolo de Git - Proyecto Fundamentos JS

Este documento define la estrategia de ramificación y mezcla para asegurar un historial trazable en desarrollo y limpio en producción.

---

## 1. Estructura de Ramas

**main**: Rama de producción. Contiene hitos estables y finales. Historial lineal.

**dev**: Rama de integración. Aquí se guarda el historial completo, incluyendo los "nudos" de cada funcionalidad para permitir Cherry-picking.

**feature/** o **clase/**: Ramas temporales para tareas o lecciones específicas.

---

## 2. Convención de Commits (Obligatorio)

Todos los commits deben comenzar con un tipo:

- **feat:** Nueva funcionalidad  
  Ejemplo: `feat: agrego login`

- **fix:** Corrección de error  
  Ejemplo: `fix: arreglo validación`

- **docs:** Documentación  
  Ejemplo: `docs: agrego GITFLOW.md`

- **style:** Cambios de formato (sin lógica)  
  Ejemplo: `style: formateo código`

- **refactor:** Mejora interna sin cambiar comportamiento  
  Ejemplo: `refactor: simplifico función`

- **test:** Agregar o modificar tests  
  Ejemplo: `test: agrego pruebas login`

- **chore:** Tareas internas o configuración  
  Ejemplo: `chore: actualizo dependencias`

---

## 3. Flujo de Trabajo (Comandos para copiar)

Cuando termines una tarea o clase, ejecuta este bloque en orden:

### 1. Asegurar calidad y persistencia en la rama de trabajo

```bash
git add .
git commit -m "feat: [nombre de la tarea]"
```

---

### 2. Integración en Desarrollo (Preservando el Historial)

El uso de `--no-ff` crea un commit de merge explícito. Esto es vital para auditorías y cherry-picks futuros, asegurando que el historial de la rama no se pierda en un fast-forward.

```bash
git checkout dev
git merge nombre-de-la-rama --no-ff
```

---

### 3. Sincronización de Producción (Historial Limpio)

Rebase mueve el puntero de `main` al final de `dev` sin crear nudos extra en `main`, manteniendo el historial de producción limpio y fácil de leer.

```bash
git checkout main
git rebase dev
```

---

### 4. Limpieza y Retorno

```bash
git branch -d nombre-de-la-rama
git checkout dev
```

---

## 4. Justificación del Flujo

**dev**: Mantenemos el historial completo para poder realizar un Cherry-pick en el futuro si es necesario extraer una funcionalidad específica sin arrastrar el resto del desarrollo.

**main**: Usamos rebase para que los despliegues y versiones finales tengan una cronología clara, profesional y sin ruidos de integración.

---

# 🔽 Código listo para copiar y pegar

```bash
git add .
git commit -m "docs: agrega descripción clara del cambio"

git checkout dev
git merge nombre-de-la-rama --no-ff

git checkout main
git rebase dev

git branch -d nombre-de-la-rama
git checkout dev
```
