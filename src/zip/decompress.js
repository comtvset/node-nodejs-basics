import { join } from 'node:path';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import fs from 'fs';

const decompress = async () => {
  const currentDir = import.meta.dirname;
  const targetDir = join(currentDir, 'files');
  const file = 'archive.gz';

  const filePathFrom = join(targetDir, file);
  const source = createReadStream(filePathFrom);

  const compressFile = 'fileToCompress.txt';
  const filePathTo = join(targetDir, compressFile);
  const destination = createWriteStream(filePathTo);

  const remove = join(targetDir, compressFile);
  const unzip = createGunzip();

  pipeline(source, unzip, destination, (err) => {
    if (err) {
      fs.unlink(remove, () => {});
      console.error('\x1b[31m>>> Failed to decompress >>>\x1b[0m', err);
      process.exitCode = 1;
    } else {
      console.log('\n\x1b[32mDecompression successful!');
    }
  });
};

await decompress();
