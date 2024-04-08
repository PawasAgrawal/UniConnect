const dotenv = require("dotenv");
dotenv.config({
    path: "./.env",
});
const mongoose = require('mongoose');

const connectToMongo = () => {
    const uri = 'mongodb+srv://pawasag2000:pawas@cluster0.8h6tnhw.mongodb.net/uniconnect?retryWrites=true&w=majority&appName=Cluster0';
    if (!uri) {
        console.error("MongoDB connection string is not defined in the environment variables.");
        return;
    } else {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
            console.log("Connected to Mongo Successfully");
        });
    }
}

module.exports = connectToMongo;
