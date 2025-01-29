import { join } from 'node:path';
import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const filePath = join(import.meta.dirname, 'files', 'script.js');

  const forked = fork(filePath, args);

  forked.on('close', (code) => {
    console.log(code);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
