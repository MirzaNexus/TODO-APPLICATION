const mongoose = require("mongoose");

const connect_db = async (database_path) => {
  try {
    const DB_OPTION = {
      dbName: process.env.DB_NAME,
    };
    await mongoose.connect(database_path, DB_OPTION);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect_db;
