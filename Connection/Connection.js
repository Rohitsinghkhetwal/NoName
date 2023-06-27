const mongoose = require("mongoose");
require('dotenv').config()




const ConnectToDB = () => {
    try{
        const connection = mongoose.connect(process.env.MONGO_URL)
        if(connection) {
            console.log("connection established");
        }

    }catch{
        console.log("Something went wrong");

    }

}

module.exports = ConnectToDB();