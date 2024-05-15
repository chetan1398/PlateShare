//Here MongoDB gets connected to our server.

import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://waradc:GKuaBDovl3mu46JE@plateshare.lqpr2rv.mongodb.net/?retryWrites=true&w=majority&appName=Plateshare';


//MONGO_CONNECTION= mongodb+srv://waradc:GKuaBDovl3mu46JE@plateshare.lqpr2rv.mongodb.net/?retryWrites=true&w=majority&appName=Plateshare

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export default connectDB;
