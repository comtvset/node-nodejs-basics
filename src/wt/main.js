import { join } from 'node:path';
import { Worker } from 'node:worker_threads';
import os from 'os';

const performCalculations = async () => {
  const currentDir = import.meta.dirname;
  const workerFile = join(currentDir, 'worker.js');
  const numCPUs = os.cpus().length;
  const promises = [];

  for (let i = 0; i < numCPUs; i++) {
    const worker = new Worker(workerFile, { workerData: 10 + i });

    const workerPromise = new Promise((resolve) => {
      worker.on('message', (message) => {
        resolve({ status: 'resolved', data: message.message });
      });

      worker.on('error', (err) => {
        console.error(err);
        resolve({ status: 'error', data: null });
      });
    });

    promises.push(workerPromise);
  }

  const results = await Promise.all(promises);
  console.log(results);
};

await performCalculations();
