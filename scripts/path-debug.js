const fs = require('fs');
const path = require('path');

console.log("Current directory:", process.cwd());
console.log("Components directory exists:", 
  fs.existsSync(path.resolve('components')));
console.log("Button2 exists:", 
  fs.existsSync(path.resolve('components/ui/Button2.tsx')));
console.log("Directory listing:", 
  fs.readdirSync(path.resolve('components/ui')));