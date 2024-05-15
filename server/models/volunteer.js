// Schema without volunteerId field
import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    availability: {
        type: Date,
    },
    address: {
        type: String,
    }
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

export default Volunteer;
