const mongoose = require("mongoose");

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
    console.log("db connected db2");
  });
  // mongoose
  //   .connect(db1, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useCreateIndex: true,
  //   })
  //   .then((conn) => {
  //     console.log("Database Connected");
  //   })
  //   .catch((error) => {
  //     console.log("Error " + error.message);
  //   });
  // mongoose.createConnection(db2, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useCreateIndex: true,
  // });
};

module.exports.db = db;
