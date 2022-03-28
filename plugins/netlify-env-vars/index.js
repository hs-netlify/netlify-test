const fs = require("fs");

module.exports = {
  onPreBuild: () => {
    fs.writeFile(
      "../vars/env.json",
      (module.exports = {
        env1: process.env.TEST_ENV_1,
        env2: process.env.TEST_ENV_2,
        env3: process.env.TEST_ENV_3,
      }),
      (err) => console.log(err)
    );
  },
};
