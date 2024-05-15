// services/foodDonationService.js

import Food from './../models/food.js';
import User from './../models/user.js';

async function donateFood(foodName, foodTag, quantity, expiryDate, address, email) {
    try {
        const user = await User.findOne({ email });

        const food = await Food.create({
            foodName,
            quantity,
            expiryDate,
            address,
            foodTag,
            user: user._id,
        });

        await food.save();
        user.food.push(food._id);
        await user.save();

        return food;
    } catch (error) {
        throw error;
    }
}

export default {
    donateFood,
};
