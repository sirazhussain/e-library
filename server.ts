import app from "./src/app";
import { config } from './src/config/config';
import connectDB from "./src/config/db";

const startServer = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Set port from config or default to 3000
    const port = config.port || 3000;

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1); // Exit process with a failure code if there is an error
  }
};

// Execute to start server
startServer();
