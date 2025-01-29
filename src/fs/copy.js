import { cp, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const copy = async () => {
  const currentDir = import.meta.dirname;
  const targetDir = join(currentDir, 'files_copy');
  const copyFromDir = join(currentDir, '../fs/files');

  try {
    const files = await readdir(currentDir);
    if (!files.includes('files') || files.includes('files_copy')) err;

    await cp(copyFromDir, targetDir, { recursive: true });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
