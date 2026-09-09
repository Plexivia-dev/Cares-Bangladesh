const fs = require('fs');
const path = require('path');

function checkAndCommentImports(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let lines = content.split('\n');
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const importMatch = line.match(/import.*from\s+['"](.+)['"]/);
    if (importMatch) {
      let importPath = importMatch[1];
      if (importPath.startsWith('.')) {
        let absoluteImportPath = path.resolve(path.dirname(filePath), importPath);
        if (!fs.existsSync(absoluteImportPath)) {
          // If no extension, try appending .js
          if (!fs.existsSync(absoluteImportPath + '.js') && !fs.existsSync(absoluteImportPath + '/index.js')) {
            lines[i] = `// [MISSING] ` + line;
            changed = true;
          }
        }
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, lines.join('\n'));
    console.log(`Updated imports in ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.js')) {
      checkAndCommentImports(fullPath);
    }
  }
}

walkDir(path.join(__dirname, 'src'));
