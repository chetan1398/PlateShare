import express from 'express';
import foodDonation from '../controllers/foodDonation.js';

const router = express.Router();

router.post("/fooddonation", foodDonation.donateFood);

export default router;

