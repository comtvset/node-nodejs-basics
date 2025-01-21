import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const currentDir = import.meta.dirname;
const targetDir = join(currentDir, 'files');
const fileToReadPath = join(currentDir, 'files/fileToRead.txt');

const read = async () => {
  try {
    const files = await readdir(targetDir);
    if (!files.includes('fileToRead.txt')) err;

    console.log(await readFile(fileToReadPath, 'utf8'));
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
