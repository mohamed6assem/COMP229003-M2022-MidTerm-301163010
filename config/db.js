// Do not expose your credentials in your code.

let atlasDB = "mongodb+srv://mohamed:EekhwekMOOmqPwtw@clustercomp229003.jya0kar.mongodb.net/carstore?retryWrites=true&w=majority";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}