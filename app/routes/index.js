import donorRoutes from './../routes/Donor-routes.js';
import volunteerOpportunityRoutes from './../routes/volunteer-opportunity-routes.js';
import volunteerRoutes from './../routes/volunteer-routes.js';

const initializeRoutes = (app)=>{
    app.use('/Donors',donorRoutes);
    app.use('/Volunteers', volunteerRoutes);
    app.use('/VolunteerOpportunities', volunteerOpportunityRoutes);
}

export default  initializeRoutes;