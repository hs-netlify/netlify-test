const { processEnv } = require("@next/env");

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(process.env.TEST_ENV_1),
  };
};
