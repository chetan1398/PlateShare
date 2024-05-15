import React, { useState } from "react";
import { FaCalendarAlt, FaCartArrowDown, FaHome } from "react-icons/fa";
import "./FoodCard.css";

import { useTranslation } from 'react-i18next';

//This is used to display the food cards
const FoodCard = ({ name, quantity, date, address, tag }) => {
  const { t } = useTranslation('common');
  const [showStatus, setShowStatus] = useState(false);

  const handleStatusClick = () => {
    if (name.toLowerCase() === "rice") {
      setShowStatus(true);
    } else {
      alert("This feature is only available for rice.");
    }
  };

  const closeStatus = () => setShowStatus(false);

  return (
    <div>
      <div className="card">
        <p
          style={{
            position: "absolute",
            top: "0.5rem",
            left: "0.5rem",
            padding: "0.5rem 1rem",
            background: "#f5f5f5",
            color: "#333",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "0.5rem",
          }}
        >
          {tag ? tag : "food"}
        </p>
        <img
          className="foodcard-img"
          src={`https://source.unsplash.com/random/?${name}`}
          alt="Card Image"
        />
        <div className="card-content">
          <h2 className="food-title">{name}</h2>
          <div className="food-details">
            <ul className="icons">
              <li>
                <span className="icons-name">
                  <FaCartArrowDown />
                </span>
                : {quantity} {t('profile.food.foodqty')}
              </li>
              <li>
                <span className="icons-name">
                  <FaCalendarAlt />
                </span>
                : {date}
              </li>
              <li>
                <span className="icons-name">
                  <FaHome />
                </span>
                : {address}
              </li>
            </ul>
          </div>
          <button className="food-btn" onClick={handleStatusClick}>{t('profile.food.status')}</button>
        </div>
      </div>
      {showStatus && (
        <div className="status-modal">
          <p>Food has been distributed at "Robin Hood Donation Drive".</p>
          <button onClick={closeStatus}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FoodCard;
