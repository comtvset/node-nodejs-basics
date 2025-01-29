import { join } from 'node:path';
import { pipeline } from 'stream/promises';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const targetFile = 'fileToCalculateHashFor.txt';
  const filePath = join(import.meta.dirname, 'files', targetFile);

  try {
    const hash = createHash('sha256');
    await pipeline(createReadStream(filePath), hash);
    console.log(`Hash for file "${targetFile}": ${hash.digest('hex')}`);
  } catch (err) {
    console.error('Hash calculating failed :(');
  }
};

await calculateHash();
