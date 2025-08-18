const { exec } = require('child_process');

// Use correct start command based on OS
const command = process.platform === 'win32' 
  ? 'npm run start-windows' 
  : 'npm run start-linux';

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(stdout);
  console.error(stderr);
});