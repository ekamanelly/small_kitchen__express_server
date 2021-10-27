const mongoose = require("mongoose");
const { logger } = require("../logger/logger");

const db = (connectionString) => {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // createIndexes: true,
  });
  var connection = mongoose.connection;
  connection.on("connected", function () {
    logger.info("db connected db2");
  });
};

module.exports.db = db;
