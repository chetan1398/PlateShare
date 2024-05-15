// routes/volunteerRoutes.js
import express from 'express';
import { addVolunteer, updateVolunteer, listVolunteers } from '../controllers/volunteer.js';

const router = express.Router();

router.post('/volunteers', addVolunteer);
router.put('/volunteers/:id', updateVolunteer);
router.get('/volunteers', listVolunteers);

export default router;
