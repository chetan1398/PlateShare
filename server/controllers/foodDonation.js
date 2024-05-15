// controllers/foodDonationController.js

import foodDonationService from './../services/foodDonationService.js';

async function donateFood(req, res) {
    try {
        const { foodName, foodTag, quantity, expiryDate, address, email } = req.body.formData;
        const food = await foodDonationService.donateFood(foodName, foodTag, quantity, expiryDate, address, email);
        res.status(201).json(food);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export default {
    donateFood,
};
