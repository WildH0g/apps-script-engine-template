import ENV_SETTINGS from './ENV.js';
import fs from 'fs';
import path from 'path';

(() => {
  const env = process.argv?.[2];
  if (!env) throw new Error('No environment provided');

  const settings = ENV_SETTINGS[env];
  if (!settings) throw new Error(`Environment ${env} not found in ENV.js`);

  let errors = 0;

  settings.forEach((setting) => {
    const { fileName, filePath, copyTo: copyFrom } = setting;
    const copyPath = path.join(process.cwd(), filePath, fileName);
    const srcPath  = path.join(process.cwd(), copyFrom, fileName);

    try {
      fs.copyFileSync(srcPath, copyPath);
    } catch (err) {
      errors++;
      console.error(`❌ Could not find file ${srcPath}.`);
    }

    const message = !errors
      ? '✅ Environment saved successfully'
      : `❗ Environment configured with ${errors}/${settings.length} errors`;
    
    console.log(message);

  });
})();
