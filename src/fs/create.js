import { writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const create = async () => {
  const currentDir = import.meta.dirname;
  const targetDir = join(currentDir, 'files');
  const newFile = 'fresh.txt';
  const targetPathFile = join(targetDir, newFile);

  try {
    await writeFile(targetPathFile, 'I am fresh and young', {
      encoding: 'utf8',
      flag: 'wx',
    });
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('FS operation failed');
    } else {
      throw err;
    }
  }
};

await create();
