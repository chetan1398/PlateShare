import express from 'express';
import * as volunteerOpportunityController from '../controllers/volunteer-opportunity-controller.js';
const router = express.Router();

router.route('/')
    .post(volunteerOpportunityController.post)
    .put(volunteerOpportunityController.put);

router.route('/:id')
    .get(volunteerOpportunityController.get)
    .delete(volunteerOpportunityController.deleteVolunteerOpportunity);



export default router;