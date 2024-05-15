import VolunteerOpportunity from './../models/volunteering-opportunity.js'
import mongoose from "mongoose";
/**
 * Saves the volunteer.
 *
 * @param {*} VolunteerOpportunity
 * @returns
 */
export const save = async (volunteerOpportunity) => {
    console.log("inside volunteer-opportunity-service / save");
    const volunteerOpp = new VolunteerOpportunity(volunteerOpportunity);
    return await VolunteerOpportunity.create(volunteerOpportunity);
}

/**
 * Retrieves a single volunteer object.
 * 
 *
 * @param {*} id
 * @returns
 */
export const get = async (volunteerOpportunityId) => {
    console.log("inside volunteer-opportunity-service / get");
    try {
        console.error("id: " + volunteerOpportunityId);
        const volunteerOpportunityFound = await VolunteerOpportunity.findOne({ volunteerOpportunityId: volunteerOpportunityId }).exec();
        // console.log(volunteerOpportunityFound.volunteerOpportunityId);
        if (!volunteerOpportunityFound) {
            throw new Error('VolunteerOpportunity not found');
        }
        return volunteerOpportunityFound;
    } catch (error) {
        console.error("Inside volunteer-opportunity-service / get error: " + error);
        throw error;
    }


   
}

/**
 * 
 * @param {*} VolunteerOpportunity
 * @returns
 */
export const put = async (volunteerOpportunity) => {

    console.log("inside volunteer-opportunity-service / get");
    const volunteerOppId = volunteerOpportunity.volunteerOpportunityId;
    try {
        const VolunteerOpportunityUpdated = await VolunteerOpportunity.findOneAndUpdate(
            {
                volunteerOpportunityId: volunteerOppId
            },
            { $set: volunteerOpportunity },
            { new: true }
        ).exec();
        if (!VolunteerOpportunityUpdated) {
            throw new Error('VolunteerOpportunity not found');
        }
        return VolunteerOpportunityUpdated;
    } catch (error) {
        console.error("Inside volunteer-opportunity-service / put error: " + error);
        throw error;
    }
}


/***
 * @params {*} 
 */

export const deleteVolunteerOpportunity = async (id) => {
    try {
        console.log("In volunteer-service deleteVolunteer");
        const deleteVolunteerOpp = await VolunteerOpportunity.findOneAndDelete(
            { volunteerOpportunityId: id },
        ).exec();
        if (!deleteVolunteerOpp) {
            throw new error("VolunteerOpportunity not found");
        }
        return deleteVolunteerOpp;
    } catch (error) {
        console.error("Inside volunteer-opportunity-service / deleteVolunteerOpportunity error: " + error);
        throw error;
    }
}