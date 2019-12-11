import mongoose from "mongoose";
import config from "config";

const db: string = config.get("mongoURI");

export default async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("MongoDB connected..");
  } catch (error) {
    console.log(error.message);
    // Exit process with failure
    process.exit(1);
  }
};
