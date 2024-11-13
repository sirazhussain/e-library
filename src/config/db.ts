import mongoose from "mongoose";
import { config } from "./config"; // Import config with dbUrl

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Listen for successful connection event and log message
    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully");
    });

    // Listen for error event on the connection and log the error
    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting to database.", err);
    });

    // Attempt to connect to MongoDB using the URL from config
    await mongoose.connect(config.dbUrl as string);
  } catch (err) {
    // Log error and exit process with failure if connection fails
    console.error("Failed to connect to database.", err);
    process.exit(1);
  }
};

export default connectDB;
