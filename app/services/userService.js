// services/userService.js

import User from './../models/user.js';

async function getAllUsers() {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw error;
    }
}

export default {
    getAllUsers,
};
