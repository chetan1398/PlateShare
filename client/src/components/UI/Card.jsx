import React from "react";
import "./Card.css";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate

const Card = ({ name, des, img }) => {
  const { t } = useTranslation('common');
  const navigate = useNavigate(); // Step 2: Create a navigate function

  const handleDonateClick = () => {
    navigate('/dashboard'); // Step 3: Navigate to Dashboard on click
  };

  return (
    <div className="partner-card">
      <img src={img} alt="Ngo pic" />
      <div className="card-content">
        <h2 className="card-heading">{name}</h2>
        <p className="card-description">{des}</p>
        <button className="btn-card" onClick={handleDonateClick}>{t('homepage.donate.now.button')}</button>
      </div>
    </div>
  );
};

export default Card;