import Volunteer from './../models/volunteer.js'
import mongoose from "mongoose";
/**
 * Saves the volunteer.
 *
 * @param {*} volunteer
 * @returns
 */
export const save = async (volunteer) => {
    console.log("inside volunteer-service / save");
    const volunteerReg = new Volunteer(volunteer);
    return await Volunteer.create(volunteer);
}

/**
 * Retrieves a single volunteer object.
 * 
 *
 * @param {*} id
 * @returns
 */
export const get = async (volunteerId) => {
    console.log("inside volunteer-service / get");
    const volunteer = await Volunteer.find({ volunteerId: volunteerId }).exec();
    return volunteer;
}

/**
 * 
 * @param {*} volunteer
 * @returns
 */
export const put = async (volunteer) => {

    console.log("inside volunteer-service / put");
    const volunteerId = volunteer.volunteerId;
    try {
        const volunteerUpdated = await Volunteer.findOneAndUpdate(
            {
                volunteerId: volunteerId
            },
            { $set: volunteer },
            { new: true }
        ).exec();
        if (!volunteerUpdated) {
            throw new Error('Volunteer not found');
        }
        return volunteerUpdated;
    } catch (error) {
        throw error;
    }
}


/***
 * @params {*} 
 */

export const deleteVolunteer = async (id) => {
    try {
        console.log("In volunteer-service deleteVolunteer");
        const deleteVolunteer = await Volunteer.findOneAndDelete(
            { volunteerId: id },
        ).exec();
        if (!deleteVolunteer) {
            throw new error("Volunteer not found");
        }
        return deleteVolunteer;
    } catch (error) {
        throw error;
    }
}