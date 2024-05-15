import Organization from './../models/organization.js';

export const createOrganization = async (organizationData) => {
    const organization = new Organization(organizationData);
    return await organization.save();
};

export const getOrganizationById = async (id) => {
    return await Organization.findById(id);
};

export const updateOrganization = async (id, organizationData) => {
    return await Organization.findByIdAndUpdate(id, organizationData, { new: true });
};

export const deleteOrganization = async (id) => {
    return await Organization.findByIdAndDelete(id);
};