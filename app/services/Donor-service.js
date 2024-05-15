import mongoose from "mongoose";

import Donor from './../models/Donor.js'


// This function will fetch all the Donors present in our Database 
export const fetch = async() =>{
    const allDonor = await Donor.find();
    return allDonor;
};


export const add = async(addDonor)=>{
    const createDonor = await Donor.create(addDonor);
    return createDonor;
};

export const update = async(donor)=>{
    const firstName = donor.firstname;
    try{
        const existingDonor = await Donor.findOne({firstname: firstName});
        if(!existingDonor){
            throw new Error('Donor not found');        
        }
        Object.assign(existingDonor, donor);
        const updatedDonor = await existingDonor.save();
        return updatedDonor;
    } catch(error){
        throw error;
    }
   
};

export const remove = async(donorId)=>{
    try{
        console.log("Delete");
        const deleteDonor = await Donor.findOneAndDelete(
            {donorId:donorId},
        ).exec();
        if(!deleteDonor){
            throw new error("Donor can not be deleted");
        }
        return deleteDonor;
    }catch (error){
        throw error;
    }
};

export const search = async (donorId)=>{
    console.log("search")
    const searchDonor = await Donor.find({ donorId }).exec();
    return searchDonor;
}





