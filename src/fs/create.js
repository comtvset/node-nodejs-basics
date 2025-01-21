import { writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const currentDir = import.meta.dirname;
const targetDir = join(currentDir, 'files');

const newFile = 'fresh.txt';
const targetPathFile = join(targetDir, newFile);

const create = async () => {
  try {
    const files = await readdir(targetDir);
    if (files.includes(newFile)) err;

    writeFile(targetPathFile, 'I am fresh and young', 'utf8');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await create();
