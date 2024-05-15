import React, { useState } from 'react';
import axios from 'axios';
import './../Volunteers/volunteerForm.css';

const VolunteerForm = ({ volunteer = {}, onUpdate }) => {
    const [formData, setFormData] = useState({
        firstName: volunteer.firstName || '',
        lastName: volunteer.lastName || '',
        email: volunteer.email || '',
        phone: volunteer.phone || '',
        availability: volunteer.availability || '', // Needs adjustment if using a date picker
        address: volunteer.address || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/volunteers", formData);
            console.log(response.data);
            alert('Volunteer saved successfully!');
            onUpdate(response.data);
        } catch (error) {
            console.error('Failed to save the volunteer:', error.message);
            alert('Failed to save the volunteer.');
        }
    };

    return (
        <div className="foodDonation_container"> {/* Using the food donation container style */}
            <div className="foodDonation_heading"> {/* Using the food donation heading style */}
                <h1 className="heading-foodd">VOLUNTEER FORM</h1> {/* Using the food donation heading style */}
            </div>
            <div className="foodDonation_wrapper"> {/* Using the food donation wrapper style */}
                <form className="food-donation_form volunteer_form" onSubmit={handleSubmit}>
                    <div className="form_element">
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form_element">
                        <label htmlFor="lastName">Last Name</label>
                        <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form_element">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form_element">
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form_element">
                        <label htmlFor="availability">Availability</label>
                        <input type="date" id="availability" name="availability" value={formData.availability} onChange={handleChange} />
                    </div>
                    <div className="form_element">
                        <label htmlFor="address">Address</label>
                        <input id="address" name="address" value={formData.address} onChange={handleChange} />
                    </div>
                    <button type="submit">Submit</button>{/* Using the food donation submit button style */}
                </form>
            </div>
        </div>
    );
};

export default VolunteerForm;
