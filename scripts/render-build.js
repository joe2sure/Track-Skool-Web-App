const { execSync } = require('child_process');

try {
  console.log('Running build with case-sensitive resolver...');
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}




// const fs = require('fs');
// const path = require('path');
// const { execSync } = require('child_process');

// function fixCaseSensitivity() {
//   const files = [];
  
//   // Recursively find all .tsx files
//   function walk(dir) {
//     fs.readdirSync(dir).forEach(file => {
//       const filePath = path.join(dir, file);
//       if (fs.statSync(filePath).isDirectory()) {
//         walk(filePath);
//       } else if (filePath.endsWith('.tsx')) {
//         files.push(filePath);
//       }
//     });
//   }

//   walk(process.cwd());

//   // Fix import paths in all files
//   files.forEach(file => {
//     let content = fs.readFileSync(file, 'utf8');
//     content = content
//       .replace(/\/button2/g, '/Button2')
//       .replace(/\/card2/g, '/Card2')
//       .replace(/\/Button2/g, '/Button2')  // Ensure consistent casing
//       .replace(/\/Card2/g, '/Card2');
//     fs.writeFileSync(file, content);
//   });
// }

// try {
//   console.log('Fixing case sensitivity...');
//   fixCaseSensitivity();
//   console.log('Running build...');
//   execSync('npm run build', { stdio: 'inherit' });
// } catch (error) {
//   console.error('Build failed:', error);
//   process.exit(1);
// }