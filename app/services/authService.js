// authService.js

import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export async function signUp(email, password, name, number) {
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return { status: 400, message: 'User already exists' };
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({ email, password: hashedPassword, name, number });
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return { status: 201, newUser, token };
    } catch (error) {
        throw error;
    }
}

export async function signIn(email, password) {
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return { status: 404, message: "User doesn't exist" };
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return { status: 400, message: 'Invalid credentials' };
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { status: 200, existingUser, token, message: 'User signed in successfully', success: true };
    } catch (error) {
        throw error;
    }
}
