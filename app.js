const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://viks1510:15101991@cluster0.rku3bif.mongodb.net/contacts-db?retryWrites=true&w=majority"

mongoose.connect(DB_HOST)
    .then(() => console.log("Database connect success"))
.catch(error=>console.log(error.message))