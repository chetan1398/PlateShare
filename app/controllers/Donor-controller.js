import * as donorService from'./../services/Donor-service.js';
import {request, response} from 'express';
import { setError,setNotFound, setResponse } from './../controllers/response-handler.js';
import express from 'express';


export const fetchDonor = async(request, response)=>{
    try{
        const allDonor = await donorService.fetch();
        setResponse(allDonor,response);
    }catch(error){
        setError(error,response);
    }
};

export const addDonor = async(request,response)=>{
    try{
        const addDonor = request.body;
        const createdDonor = await donorService.add(addDonor);
        setResponse(createdDonor,response)
    }
    catch(error){
        setError(error,response)
    }
};

export const updateDonor = async(request,response)=>{
    try {
        const updateDonorData= {...request.body};
        const updatedDonor = await donorService.update(updateDonorData);
        setResponse(updatedDonor,response)
    }catch(error){
    setError(error,response);
}
};

export const removeDonor = async(request, response)=>{
    try{
        console.log("Delete");
        const donorId = request.params.id;
        console.log("Deleting"+donorId);
        const removeDonor = await donorService.remove(donorId);
        setResponse(removeDonor, response);
    }catch(error){
        setError(error, response);
    }
};

export const searchDonor = async(request,response)=>{
    try{
        console.log("search");
        const searchDonorId = request.params.id;
        const searchDonor = await donorService.search(searchDonorId);
        setResponse(searchDonor, response);
    }catch(error){
        setError(error, response);
    }
};
