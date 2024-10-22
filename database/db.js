const mongoose = require('mongoose');

async function connectToMongo() {
    try {
        await mongoose.connect("mongodb+srv://jainchaitanya1024:Chaitanyamongo123@clusterigm.0wahhnv.mongodb.net/?retryWrites=true&w=majority&appName=ClusterIGM");
        console.log('Connected to MongoDB successfully!');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports = connectToMongo;
