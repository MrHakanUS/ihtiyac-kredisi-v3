#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
 

// Check if we're in the right directory
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ Error: package.json not found. Please run this script from the project root.');
  process.exit(1);
}

try {
  // Install dependencies 
  execSync('npm install @tanstack/react-query @tanstack/react-query-devtools axios', { 
    stdio: 'inherit',
    cwd: process.cwd() 
  });
   
  
  // Verify installation
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const requiredDeps = ['@tanstack/react-query', '@tanstack/react-query-devtools', 'axios'];
   
  requiredDeps.forEach(dep => {
    if (packageJson.dependencies[dep]) { 
    } else { 
    }
  });
  
  
  
} catch (error) {
  console.error('\n❌ Error installing dependencies:', error.message); 
  process.exit(1);
}