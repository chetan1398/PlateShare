// controllers/foodController.js
import * as foodService from '../services/foodService.js';

async function getAllFoods(req, res) {
    try {
        const foods = await foodService.getAllFoods();
        res.status(200).json(foods);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export { getAllFoods };
