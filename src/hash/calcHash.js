import { join } from 'node:path';
import { pipeline } from 'stream/promises';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const currentDir = import.meta.dirname;
const targetDir = join(currentDir, 'files');
const file = 'fileToCalculateHashFor.txt';

const filePath = join(targetDir, file);

const calculateHash = async () => {
  try {
    const hash = createHash('sha256');
    await pipeline(createReadStream(filePath), hash);
    console.log(`Hash for file "${file}": ${hash.digest('hex')}`);
  } catch (err) {
    console.error('Hash calculating failed :(');
  }
};

await calculateHash();
