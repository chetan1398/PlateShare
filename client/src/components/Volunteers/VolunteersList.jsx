// src/components/VolunteersList.jsx
import React, { useEffect, useState } from 'react';
import { listVolunteers } from '../../utils/api.js';

const VolunteersList = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        const fetchVolunteers = async () => {
            try {
                const result = await listVolunteers();
                setVolunteers(result.data);
            } catch (error) {
                console.error('Error fetching volunteers:', error);
            }
        };
        fetchVolunteers();
    }, []);

    return (
        <div>
            <h2>Volunteers List</h2>
            <ul>
                {volunteers.map(vol => (
                    <li key={vol._id}>{vol.user} - {vol.skills.join(', ')}</li>
                ))}
            </ul>
        </div>
    );
};

export default VolunteersList;
