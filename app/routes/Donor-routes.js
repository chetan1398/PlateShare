import * as donorController from './../controllers/Donor-controller.js';
import express from 'express';

const router = express.Router();

router.route('/')
    .get(donorController.fetchDonor);

router.route('/:id')
    .delete(donorController.removeDonor)


    .get(donorController.searchDonor);

router.route('/add')
    .post(donorController.addDonor);

router.route('/:firstName')
.put(donorController.updateDonor);
export default router;
