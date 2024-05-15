import React from "react";
import "./ImgDisplay.css";
import { Link, useNavigate } from "react-router-dom";
import {useTranslation} from 'react-i18next';


//This function displays the dashboard after sign up
const ImgDisplay = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleDonateNowClick = () => {
    if (user) {
      // User is logged in, navigate to food donation route
      navigate("/dashboard");
    } else {
      // User is not logged in, navigate to signup route
      navigate("/signup");
    }
  };

  const {t} = useTranslation('common');
  return (
    <div className="first-display">
      <div className="text">
        <h1 className="img-text">
        {t('homepage.img.txt1')}<span>{t('homepage.img.txt2')}</span>
        </h1>
        <h3>{t('homepage.img.txt3')}</h3>
        <button className="btn" onClick={handleDonateNowClick}>
        {t('homepage.donate.now.button')}
        </button>
      </div>
    </div>
  );
};

export default ImgDisplay;
