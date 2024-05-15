// src/api.js or src/utils/api.js
import axios from 'axios';

const API_BASE_URL = '/api'; // Base URL for your API

export const addVolunteer = (volunteerData) => {
    return axios.post(`${API_BASE_URL}/volunteers`, volunteerData);
};

export const updateVolunteer = (id, volunteerData) => {
    return axios.put(`${API_BASE_URL}/volunteers/${id}`, volunteerData);
};

export const listVolunteers = () => {
    return axios.get(`${API_BASE_URL}/volunteers`);
};
