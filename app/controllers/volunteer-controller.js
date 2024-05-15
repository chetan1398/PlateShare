// import { setError, setResponse } from "./response-handler";
import { request, response } from 'express';
import { setError, setNotFound, setResponse } from './../controllers/response-handler.js';
import express from 'express';
import * as volunteerService from './../services/volunteer-service.js';


export const post = async (request, response) => {
    try {

        console.log("Inside volunteer-controller / post");
        const vol = { ...request.body };
        const volunteer = await volunteerService.save(vol);
        setResponse(volunteer, response);

    } catch (error) {
        setError(error, response);
    }
}


export const get = async (request, response) => {
    try {

        console.log("Inside volunteer-controller / get");
        const volunteer = await volunteerService.get(request.params.id);
        setResponse(volunteer, response);
    } catch (error) {
        setError(error, response);
    }
}


export const put = async (request, response) => {

    try {
        console.log("Inside volunteer-controller / put");
        const volunteer = { ...request.body }
        const volunteerUpdated = await volunteerService.put(volunteer);
        setResponse(volunteerUpdated, response);
    } catch (error) {
        console.log(error);
        setError(error, response);
    }
}

export const deleteVolunteer = async (request, response) => {
    try {
        console.log("Inside volunteer-controller / deleteVolunteer");
        const volunteerId = request.params.id;
        console.log("Deleting volunteer: " + volunteerId);
        const deleteVolunteer = await volunteerService.deleteVolunteer(volunteerId);
        setResponse(deleteVolunteer, response);
    } catch (error) {
        console.log(error);
        setError(error, response);
    }
}



