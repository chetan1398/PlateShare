// import { Router } from 'express';
// const router = Router();

// // Route to get data for all users
// router.get('/admin/dashboard', (req, res) => {
//     // Query the database to get data related to all users
//     // Return the data as a response
// });

// export default router;
// routes/admin.routes.js
import { Router } from 'express';
import * as adminController from '../controllers/admin.js';

const router = Router();

// Route to get data for all users
router.get('/admin/dashboard', adminController.getDashboardData);

export default router;
