import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import store from './store'; // 
import i18n from './i18n'; // 
import ErrorBoundary from "./components/ErrorBoundary"; //

// Pages and components
import Home from "./pages/Home";
import FoodDonation from "./pages/FoodDonation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./dashboard/Layout";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./dashboard/Profile";
import Food from "./dashboard/Food";
import VolunteerForm from './components/Volunteers/VolunteerForm';
import VolunteersList from './components/Volunteers/VolunteersList';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ErrorBoundary>
            <AppContent />
          </ErrorBoundary>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  );
}

function AppContent() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  return (
    <>
      {(!location.pathname.includes("/login") &&
        !location.pathname.includes("/signup") &&
        !location.pathname.includes("/dashboard")) && <Navbar token={token} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<FoodDonation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactForm />} />
        {token ? (
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<FoodDonation />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/food" element={<Food />} />
            <Route path="/dashboard/volunteers" element={<VolunteersList />} />
            <Route path="/dashboard/volunteer/new" element={<VolunteerForm />} />
          </Route>
        ) : (
          <Route path="*" element={<Login />} />
        )}
      </Routes>
    </>
  );
}

export default App;