//This is for Authentication service

import * as authService from '../services/authService.js';

export async function signUp(req, res) {
    try {
        const { email, password, name, number } = req.body;
        const result = await authService.signUp(email, password, name, number);
        res.status(result.status).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export async function signIn(req, res) {
    try {
        const { email, password } = req.body;
        const result = await authService.signIn(email, password);
        res.status(result.status).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
