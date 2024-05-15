import mongoose from "mongoose";
//User schema
const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        food: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Food",
            },
        ],
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
