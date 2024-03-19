import mongoose from "mongoose";
const USERNAME = 'ram'; 
const PASSWORD = 'vLlXnP5x4vXAghQk';
const DB_NAME = 'cluster0'; // Replace with your actual database name

// Construct the connection string with the username, password, and database name
// const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.sxpngpr.mongodb.net/${DB_NAME}`;
// let connectoin = mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.sxpngpr.mongodb.net/${DB_NAME}`) ;
const connectoin = mongoose.connect(`mongodb+srv://ram:vLlXnP5x4vXAghQk@cluster0.2fnedxq.mongodb.net/`)

export default connectoin ;