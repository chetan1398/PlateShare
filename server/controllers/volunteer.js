// controllers/volunteerController.js
import Volunteer from '../models/volunteer.js';  // Ensure the Volunteer model uses ES Module syntax too

// Controller without volunteerId
export const addVolunteer = async (req, res) => {
    try {
        const newVolunteer = new Volunteer(req.body);
        await newVolunteer.save();
        res.status(201).json(newVolunteer);
    } catch (error) {
        res.status(500).json({ message: "Error adding volunteer", error });
        console.log(error.message);
    }
};



export const updateVolunteer = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedVolunteer = await Volunteer.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedVolunteer);
    } catch (error) {
        res.status(500).json({ message: "Error updating volunteer", error });
    }
};

export const listVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find().populate('user');
        res.status(200).json(volunteers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching volunteers", error });
    }
};
