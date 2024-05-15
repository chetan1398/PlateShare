// services/foodService.js
import food from './../models/food.js';

async function getAllFoods() {
    try {
        const foods = await food.find({});
        return foods;  // Return the data
    } catch (error) {
        console.error('Failed to fetch foods from database:', error);
        throw error;
    }
}

export { getAllFoods };
