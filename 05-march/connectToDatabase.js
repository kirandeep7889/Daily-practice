const mongoose = require("mongoose");

let db;

async function connectToDatabase() {
    if (db) {
        return db;
    }  
    try {
        const connect = await mongoose.connect("mongodb+srv://skirandeep999:Kirandeep7889@cluster0.hqrjaa0.mongodb.net/movies");
        db =   connect.connection;
        console.log("Connected to MongoDB successfully!");
        return db;
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
        throw err;
    }
}

module.exports = connectToDatabase;
