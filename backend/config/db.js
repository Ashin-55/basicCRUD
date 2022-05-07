const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://deepnet:A6sELenF8s9J9xWf@deepnet.yzsto.mongodb.net/MernCRUD?retryWrites=true&w=majority"
    );
    console.log(`database connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
