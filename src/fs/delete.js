import { readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

const remove = async () => {
  const currentDir = import.meta.dirname;
  const targetDir = join(currentDir, 'files');
  const fileToRemovePath = join(currentDir, 'files/fileToRemove.txt');

  try {
    const files = await readdir(targetDir);
    if (!files.includes('fileToRemove.txt')) {
      throw new Error('FS operation failed');
    }

    await rm(fileToRemovePath);
  } catch (err) {
    throw err;
  }
};

await remove();
