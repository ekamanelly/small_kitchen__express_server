const logger = require("pino");
const dayjs = require("dayjs");

module.exports.logger = logger({
  prettyprint: true,
  base: {
    pid: false,
  },
  timestamp: () => ` "time": "${dayjs().format()}"`,
});
