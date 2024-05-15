import mongoose from "mongoose";


const skillSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
);

const Schema = new mongoose.Schema({

    volunteerId: {
        type: Number,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    skills: [skillSchema],
    availability: {
        type: String,
        required: true
    }



});

const model = mongoose.model('volunteer', Schema);

export default model;