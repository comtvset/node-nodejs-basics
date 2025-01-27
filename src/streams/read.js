import { join } from 'node:path';
import { createReadStream } from 'fs';
import { stdout } from 'node:process';

const currentDir = import.meta.dirname;
const targetDir = join(currentDir, 'files');
const file = 'fileToRead.txt';

const filePath = join(targetDir, file);

const read = async () => {
  stdout.write(
    `\n\n\n\n\x1b[36m⋇⋇⋇ Welcome to "Reader"! ⋇⋇⋇\n\n\x1b[37m`
  );

  const stream = createReadStream(filePath, 'utf-8');
  stream.on('data', (chunk) => stdout.write(chunk + '\n'));

  stream.on('error', (err) => {
    console.error('\x1b[31m>>> Failed to read file >>>\x1b[0m', err);
    stream.destroy();
  });

  stream.on('end', () => {
    console.log('\n\x1b[32mFile read successfully!');
  });
};

await read();
