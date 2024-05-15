import { request, response } from 'express';
import { setError, setNotFound, setResponse } from './response-handler.js';
import express from 'express';
import * as volunteerOpportunityService from '../services/volunteer-opportunity-service.js';


export const post = async (request, response) => {

    try {
        console.log("Inside volunteer-opportunity-controller / post");
        const volOpp = { ...request.body };
        const volunteerOpportunity = await volunteerOpportunityService.save(volOpp);
        setResponse(volunteerOpportunity, response);
    } catch (error) {
        console.error("Inside volunteer-opportunity-controller / post error: " + error);
        setError(error, response);
    }
}

export const get = async (request, response) => {
    try {

        console.log("Inside volunteer-opportunity-controller / get");
        const volunteerOpportunity = await volunteerOpportunityService.get(request.params.id);
        setResponse(volunteerOpportunity, response);
    } catch (error) {
        console.error("Inside volunteer-opportunity-controller / post error: " + error);
        setError(error, response);
    }
}

export const put = async (request, response) => {

    try {
        console.log("Inside volunteer-opportunity-controller / put");
        const volunteerOpportunity = { ...request.body }
        const volunteerOpportunityUpdated = await volunteerOpportunityService.put(volunteerOpportunity);
        setResponse(volunteerOpportunityUpdated, response);
    } catch (error) {
        console.log("Inside volunteer-opportunity-controller / put error: " + error);
        setError(error, response);
    }
}

export const deleteVolunteerOpportunity = async (request, response) => {
    try {
        console.log("Inside volunteer-opportunity-controller / deleteVolunteer");
        const volunteerOpportunityId = request.params.id;
        console.log("Deleting volunteerOpportunity: " + volunteerOpportunityId);
        const deleteVolunteerOpportunity = await volunteerOpportunityService.deleteVolunteerOpportunity(volunteerOpportunityId);
        setResponse(deleteVolunteerOpportunity, response);
    } catch (error) {
        console.log("Inside volunteer-opportunity-controller / deleteVolunteer error: " + error);
        setError(error, response);
    }
}


