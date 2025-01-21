import { readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

const currentDir = import.meta.dirname;
const targetDir = join(currentDir, 'files');
const fileToRemovePath = join(currentDir, 'files/fileToRemove.txt');

const remove = async () => {
  try {
    const files = await readdir(targetDir);
    if (!files.includes('fileToRemove.txt')) err;

    await rm(fileToRemovePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
