import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const read = async () => {
  const currentDir = import.meta.dirname;
  const targetDir = join(currentDir, 'files');
  const fileToReadPath = join(currentDir, 'files/fileToRead.txt');

  try {
    const files = await readdir(targetDir);
    if (!files.includes('fileToRead.txt')) {
      throw new Error('FS operation failed');
    }

    console.log(await readFile(fileToReadPath, 'utf8'));
  } catch (err) {
    throw err;
  }
};

await read();
