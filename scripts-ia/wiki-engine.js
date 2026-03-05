import fs from 'fs';
import path from 'path';

// Configuración de rutas
const srcDir = path.join(process.cwd(), 'src');
const docsDir = path.join(process.cwd(), 'docs');

// Asegurar que la carpeta docs exista
if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });

/**
 * Función principal para generar documentación
 * @param {string} filePath - Ruta completa del archivo .ts
 */
function generateMarkdown(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(srcDir, filePath);
    const parsedPath = path.parse(relativePath);

    const outDir = path.join(docsDir, parsedPath.dir);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const mdPath = path.join(outDir, parsedPath.name + '.md');

    let mdContent = `# 🧩 Módulo: ${parsedPath.name}\n\n`;
    mdContent += `> Documentación técnica generada para el archivo \`src/${relativePath.replace(/\\/g, '/')}\`.\n\n`;

    mdContent += `## 📂 Dependencias (Wikipedia Links)\n\n`;

    // Regex para detectar imports relativos
    const importRegex = /import\s+.*?\s+from\s+['"](\..*?)['"]/g;
    let match;
    let hasDeps = false;

    while ((match = importRegex.exec(content)) !== null) {
        hasDeps = true;
        const importPath = match[1];

        // Resolver la ruta del archivo importado
        const absoluteImport = path.resolve(path.dirname(filePath), importPath);
        const relativeImportFromSrc = path.relative(srcDir, absoluteImport).replace(/\\/g, '/');

        // Limpiar extensión si existe
        const cleanName = path.basename(relativeImportFromSrc).replace(/\.ts$/, '');
        const linkPath = `./${path.relative(path.dirname(mdPath), path.join(docsDir, relativeImportFromSrc)).replace(/\\/g, '/')}.md`;

        mdContent += `- [${cleanName}](${linkPath.replace('.ts.md', '.md')})\n`;
    }

    if (!hasDeps) mdContent += `*Este módulo no tiene dependencias internas.*\n`;

    mdContent += `\n## 📝 Análisis de Lógica\n\n`;
    mdContent += `Implementación detallada de **${parsedPath.name}**. Este archivo forma parte de la capa de \`${parsedPath.dir.split(path.sep)[0] || 'Raíz'}\`.\n\n`;
    mdContent += `--- \n*Generado automáticamente por Wiki-Engine v1.0*`;

    fs.writeFileSync(mdPath, mdContent);
    console.log(`✅ Wiki actualizada: docs/${relativePath.replace(/\.ts$/, '.md')}`);
}

// Lógica de ejecución por argumentos
const args = process.argv.slice(2);

if (args[0] === '--all') {
    console.log("🔍 Escaneando proyecto completo...");
    const walk = (dir) => {
        fs.readdirSync(dir).forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                if (file !== 'node_modules' && file !== 'dist') walk(fullPath);
            } else if (file.endsWith('.ts')) {
                generateMarkdown(fullPath);
            }
        });
    };
    walk(srcDir);
} else if (args[0] === '--file' && args[1]) {
    const targetFile = path.resolve(args[1]);
    if (fs.existsSync(targetFile)) {
        generateMarkdown(targetFile);
    } else {
        console.error("❌ Error: El archivo no existe.");
    }
} else {
    console.log("Uso: node scripts/wiki-engine.js [--all | --file <ruta>]");
}