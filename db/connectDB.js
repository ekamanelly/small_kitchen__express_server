const mongoose = require("mongoose");
const { logger } = require("../logger/logger");

const db = () => {
  const db2 =
    "mongodb+srv://Vorem:V12o45e7Re89M4P5s4S7D9G@cluster0.z99b6.mongodb.net/easydoc-doctor?retryWrites=true&w=majority";

  mongoose.connect(db2, {
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
