import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import fs from 'fs/promises';

const rename = async () => {
  const currentDir = import.meta.dirname;
  const targetDir = join(import.meta.dirname, 'files');
  const wrongFilenamePath = join(currentDir, 'files/wrongFilename.txt');
  const properFilenamePath = join(currentDir, 'files/properFilename.md');

  try {
    const files = await readdir(targetDir);
    if (
      !files.includes('wrongFilename.txt') ||
      files.includes('properFilename.md')
    )
      err;

    await fs.rename(wrongFilenamePath, properFilenamePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
