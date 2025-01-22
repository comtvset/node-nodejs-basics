const parseArgs = () => {
  const args = process.argv;
  let result = [];

  args.map((item, index) => {
    if (item.startsWith('--')) {
      const key = item.slice(2);
      result.push(`${key} is ${args[index + 1]}`);
    }
  });
  console.log(result.join(', '));
};

parseArgs();
