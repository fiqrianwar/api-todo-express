import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/db_todo`);
    console.log(`\n MongoDB connected!!! DB HOST: `);
  } catch (error) {
    console.log("MONGO connection error:", error);
    process.exit(1);
  }
};

export default connectDb;
