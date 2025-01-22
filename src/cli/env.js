const parseEnv = () => {
  const objectEnv = process.env;
  let result = [];

  Object.entries(objectEnv).forEach(([key, value]) => {
    if (key.startsWith('RSS_')) {
      result.push(`${key}=${value}`);
    }
  });
  console.log(result.join('; '));
};

parseEnv();
