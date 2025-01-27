import { stdout, stdin } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
  stdout.write(
    `\n\n\n\n\x1b[36m⋇⋇⋇ Welcome to "Transformer"! ⋇⋇⋇\n\x1b[31m(note: to terminate the program, press "ctrl + c")\x1b[33m\n \n⤥ Please write something below ⤦\n\n\x1b[37m`
  );

  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      let input = chunk.toString().trim();
      let reverse = input.split('').reverse().join('');

      this.push(`\x1b[34m${input}  \x1b[0m>  \x1b[32m${reverse}\n\x1b[0m`);

      callback();
    },
  });

  stdin.pipe(reverse).pipe(stdout);

  process.on('SIGINT', () => {
    stdout.write('\n\n\n\x1b[33mSee you soon...');
    process.exit();
  });
};

await transform();
