import mongoose from "mongoose";




const skill = new mongoose.Schema(
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

    volunteerOpportunityId: {
        type: Number,
        required: true
    },
    description: {
        type: String,

    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    projectId: {
        type: Number,
        required: true
    },
    requiredSkills: [skill]

});

const model = mongoose.model('VolunteerOpportunity', Schema);

export default model;