import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const list = async () => {
  const currentDir = import.meta.dirname;
  const targetDir = join(currentDir, 'files');

  try {
    const getFilesCurrentDir = await readdir(currentDir);
    if (!getFilesCurrentDir.includes('files')) {
      throw new Error('FS operation failed');
    }

    console.log(await readdir(targetDir));
  } catch (err) {
    throw err;
  }
};

await list();
