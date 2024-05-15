import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
    donorId:{
        type: Number,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    phone :{
        type: Number,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    location:{
        type: String,
        required:true
    }
});

const model = mongoose.model('Donor', donorSchema);

export default model;