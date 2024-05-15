import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema({
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    }
});

const Organization = mongoose.model('Organization', organizationSchema);

export default Organization;