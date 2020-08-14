const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const archive = archiver('zip')
  .on('error', err => console.error(err));

archive.pipe(process.stdout);
const fileStream = fs.createReadStream(path.join(__dirname, 'compiled.txt'));
archive.append(fileStream, { name: 'compiled.txt' });
archive.finalize();
