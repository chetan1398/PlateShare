// controllers/admin.js
import * as adminService from '../services/adminService.js';

async function getDashboardData(req, res) {
    try {
        const userData = await adminService.getAllUserData();
        res.status(200).json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Unable to fetch user data." });
    }
}

export { getDashboardData };
