const { execSync } = require('child_process');

console.log('Testing Next.js build...');

try {
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Run type check
  console.log('Running type check...');
  execSync('npm run type-check', { stdio: 'inherit' });
  
  // Run build
  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ Build successful! Ready for Vercel deployment.');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
