const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'components/ui/Button2.tsx',
  'components/ui/Card2.tsx'
];

requiredFiles.forEach(file => {
  const fullPath = path.resolve(file);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing file: ${file}`);
    process.exit(1);
  }
  console.log(`Verified: ${file}`);
});

console.log('All required files exist with correct casing');