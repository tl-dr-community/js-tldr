const fs = require('fs');
const path = require('path');

module.exports = index => {
  return index.map(entry => {
    const { path: docPath } = entry;
    const filepath = path.join(process.cwd(), './public/', `${docPath}.md`);
    const file = fs.readFileSync(filepath, 'utf8');
    return { body: file, ...entry };
  });
};
