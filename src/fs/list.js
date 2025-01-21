import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const currentDir = import.meta.dirname;
const targetDir = join(currentDir, 'files');

const list = async () => {
  try {
    const getFilesCurrentDir = await readdir(currentDir);
    if (!getFilesCurrentDir.includes('files')) err;

    console.log(await readdir(targetDir));
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
