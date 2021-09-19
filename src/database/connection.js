const mongoose = require("mongoose");

exports.conectDatabase = async() => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(` [x] Connected to database.`)
    } catch(err) {
        console.log(` [x] Failed to connect to database.${err.message}`)
    }
};

exports.conectDatabase();

