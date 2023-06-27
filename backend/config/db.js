const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connectted to ${conn.connection.host}`.cyan.underline);
  } catch {
    console.log(`error : ${error.message}`.red.underline);
    process.exit(1);
  }
};

module.exports = connectDB;
