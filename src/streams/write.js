import { join } from 'node:path';
import { createWriteStream } from 'fs';
import { stdin, stdout } from 'node:process';

const write = async () => {
  const targetFile = 'fileToWrite.txt';
  const filePath = join(import.meta.dirname, 'files', targetFile);
  const stream = createWriteStream(filePath, 'utf-8');

  stream.on('error', (err) => {
    console.error('\x1b[31m>>> Something went wrong >>>\x1b[0m', err);
    stream.destroy();
  });

  stdin.pipe(stream);
  stdout.write(
    `\n\n\n\n\x1b[36m⋇⋇⋇ Welcome to "Writer"! ⋇⋇⋇\n\x1b[31m(note: to terminate the program, press "ctrl + c")\x1b[33m\n \n⤥ Please write something below ⤦\n\n\x1b[37m`
  );

  process.on('SIGINT', () => {
    stdout.write(`\n\n\n\x1b[32mFile "${targetFile}" written successfully!`);
    stdout.write('\n\x1b[33mSee you soon...');
    process.exit();
  });
};

await write();
