// Import the dotenv package and initialize it
import { config as conf } from 'dotenv';

// Load environment variables from a .env file
conf();

// Define a configuration object with values from environment variables
const _config = {
  port: process.env.PORT || 3000,  // Set a default port if PORT is not defined
  dbUrl: process.env.MONGO_CONNECTION,       // Example database URI
  apiKey: process.env.API_KEY,     // Example API key
  env: process.env.NODE_ENV,
};

// Freeze the configuration object to prevent further modifications
export const config = Object.freeze(_config);
