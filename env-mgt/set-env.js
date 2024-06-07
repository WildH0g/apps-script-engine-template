import ENV_SETTINGS from './ENV.js';
import fs from 'fs';
import path from 'path';

(() => {
  const env = process.argv?.[2];
  if (!env) throw new Error('No environment provided');

  const settings = ENV_SETTINGS[env];
  if (!settings) throw new Error(`Envirnoment ${env} not found in ENV.js`);

  let errors = 0;

  settings.forEach((setting) => {
    const { filenName, filePath, copyTo } = setting;
    const srcPath = path.join(process.cwd(), filePath, filenName);
    const copyPath = path.join(process.cwd(), copyTo, filenName);

    try {
      fs.copyFileSync(srcPath, copyPath);
    } catch (err) {
      errors++;
      console.error(`❌ Could not find file ${srcPath}.`);
    }

    const message = !errors
      ? '✅ Environment configured successfully'
      : `❗ Environment configured with ${errors}/${settings.length} errors`;
    
    console.log(message);

  });
})();
