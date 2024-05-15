import express from 'express';
import foodDonation from '../controllers/foodDonation.js';
//This is our route for food donation
const router = express.Router();

router.post("/fooddonation", foodDonation.donateFood);

export default router;

