import express from 'express';
import * as organizationController from '../controllers/organization-controller.js';

const router = express.Router();

router.post('/', organizationController.create);
router.get('/:id', organizationController.getById);
router.put('/:id', organizationController.update);
router.delete('/:id', organizationController.deleteOrganization);

export default router;