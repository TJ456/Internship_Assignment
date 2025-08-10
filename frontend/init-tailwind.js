const fs = require('fs');
const { execSync } = require('child_process');

// Create necessary directories
const dirs = [
  'node_modules/.vite',
  'node_modules/.vite/deps'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Initialize Tailwind
execSync('npx tailwindcss init -p', { stdio: 'inherit' });
