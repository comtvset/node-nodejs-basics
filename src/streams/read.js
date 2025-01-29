import { join } from 'node:path';
import { createReadStream } from 'fs';
import { stdout } from 'node:process';

const read = async () => {
  const targetFile = 'fileToRead.txt';
  const filePath = join(import.meta.dirname, 'files', targetFile);
  const stream = createReadStream(filePath, 'utf-8');

  stdout.write(`\n\n\n\n\x1b[36m⋇⋇⋇ Welcome to "Reader"! ⋇⋇⋇\n\n\x1b[37m`);

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
