const mongoose = require('mongoose') 

const connectDB = (url) => {
    return mongoose
    .connect(url)
    .then(()=>console.log('connected to database.....'))
    .catch((err)=>console.log( err));
}

const connectionString = 

module.exports = connectDB

// mongoose
// .connect(connectionString)
// .then(()=>console.log('connected to database.....'))
// .catch((err)=>console.log( err));