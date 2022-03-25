import * as fs from "fs";

module.exports = {
  onPreBuild: () => {
    const envs = {
      env1: process.env.TEST_ENV_1,
      env2: process.env.TEST_ENV_2,
      env3: process.env.TEST_ENV_3,
    };

    let jsonEnvs = JSON.stringify(envs);

    fs.writeFile("../vars/env.json", jsonEnvs, "utf8");
  },
};
