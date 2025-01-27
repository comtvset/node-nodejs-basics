import { join } from 'node:path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import fs from 'fs';

const compress = async () => {
  const currentDir = import.meta.dirname;
  const targetDir = join(currentDir, 'files');
  const file = 'fileToCompress.txt';

  const filePathFrom = join(targetDir, file);
  const source = createReadStream(filePathFrom);

  const compressFile = 'archive.gz';
  const filePathTo = join(targetDir, compressFile);
  const destination = createWriteStream(filePathTo);

  const remove = join(targetDir, compressFile);
  const gzip = createGzip();

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      fs.unlink(remove, () => {});
      console.error('\x1b[31m>>> Failed to compress >>>\x1b[0m', err);
      process.exitCode = 1;
    } else {
      console.log('\n\x1b[32mCompression successful!');
    }
  });
};

await compress();
