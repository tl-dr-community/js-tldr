const fs = require('fs');
const path = require('path');

const index = require('./public/docs/index.json');
const normalizeDocsIndex = require('./src/data/normalizeDocsIndex.js');
const populateDocsIndexWithFileData = require('./src/data/populateDocsIndexWithFileData.js');

const normalizedDocsIndex = normalizeDocsIndex(index);
const searchIndex = populateDocsIndexWithFileData(normalizedDocsIndex);

const file = JSON.stringify(searchIndex, null, 2);

const filepath = path.resolve(
  __dirname,
  process.env.NODE_ENV === 'production' ? 'build' : 'public',
  'docs/search-index.json',
);
console.log('Building index for path: ', filepath);
fs.writeFileSync(filepath, file, { flag: 'w' });
