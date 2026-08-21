import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INDEXNOW_MANIFEST = path.join(__dirname, '../public/indexnow.json');
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow'
];

async function submitIndexNow() {
  console.log('🚀 Starting Microsoft Bing & IndexNow Submission for GrowGuest...');

  if (!fs.existsSync(INDEXNOW_MANIFEST)) {
    console.error('❌ indexnow.json manifest file not found in /public!');
    process.exit(1);
  }

  const manifestContent = JSON.parse(fs.readFileSync(INDEXNOW_MANIFEST, 'utf-8'));

  console.log(`📋 Submitting ${manifestContent.urlList.length} URLs for host: ${manifestContent.host}`);
  console.log(`🔑 Key: ${manifestContent.key}`);

  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      console.log(`📡 Pinging IndexNow API at: ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(manifestContent)
      });

      if (response.status === 200 || response.status === 202) {
        console.log(`✅ Success (${response.status}): URLs submitted to ${endpoint}`);
      } else {
        const text = await response.text();
        console.log(`⚠️ Endpoint ${endpoint} returned status ${response.status}: ${text}`);
      }
    } catch (err) {
      console.error(`❌ Error submitting to ${endpoint}:`, err.message);
    }
  }
}

submitIndexNow();
