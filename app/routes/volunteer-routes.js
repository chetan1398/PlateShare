import express from 'express';
import * as volunteerController from '../controllers/volunteer-controller.js';
const router = express.Router();

router.route('/')
    .post(volunteerController.post)
    .put(volunteerController.put);

router.route('/:id')
    .get(volunteerController.get)
    .delete(volunteerController.deleteVolunteer);



export default router;