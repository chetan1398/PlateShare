// controllers/foodController.js
import * as foodService from '../services/foodService.js'; // Ensure this points to the service layer

async function getAllFoods(req, res) {
    try {
        const foods = await foodService.getAllFoods(); // Get foods from the service
        res.status(200).json(foods); // Send response
    } catch (error) {
        console.error('Error in food controller:', error);
        res.status(500).json({ message: "Server Error" }); // Handle errors
    }
}

export { getAllFoods };
