import React, { useState } from "react";
import axios from "axios";
import "./FoodDonation.css";
import {useTranslation} from 'react-i18next';
import { useNavigate } from 'react-router-dom';

//Function display the List of food items
function FoodDonation() {
  const navigate = useNavigate(); 
  const [foodName, setFoodName] = useState("");
  const [foodTag, setFoodTag] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [address, setAddress] = useState("");

  const email = localStorage.getItem("email");
  console.log(email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      foodName,
      foodTag,
      quantity,
      expiryDate,
      address,
      email,
    };
    console.log(formData);
    // Send the form data to the server using fetch or Axios
    try {
      const response = await axios.post("http://localhost:3000/fooddonation", {
        formData,
      },
      navigate('/dashboard'));

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const {t} = useTranslation('common');
  return (
    <div className="foodDonation_container">
      <div className="foodDonation_heading">
        <h1 className="heading-foodd">{t('profile.food.form')}</h1>
      </div>
      <div className="foodDonation_wrapper">
        <form className="food-donation_form" onSubmit={handleSubmit}>
          <div className="form_element">
            <label htmlFor="foodName">{t('profile.food.name')}</label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              value={foodName}
              onChange={(event) => setFoodName(event.target.value)}
            />
          </div>
          <div className="form_element">
            <label htmlFor="quantity">{t('profile.food.name')}</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </div>

          <div className="form_element">
            <label htmlFor="foodTag">{t('profile.food.type')}</label>
            <select
              id="foodTag"
              name="foodTag"
              value={foodTag}
              onChange={(event) => setFoodTag(event.target.value)}
            >
              <option value="" disabled selected>
              {t('profile.food.choose')}
              </option>
              <option value="veg" style={{ color: "black" }}>
              {t('profile.food.veg')}
              </option>
              <option value="nonveg" style={{ color: "black" }}>
              {t('profile.food.nonveg')}
              </option>
            </select>
          </div>

          <div className="form_element">
            <label htmlFor="expiryDate">{t('profile.food.expiry')}</label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={expiryDate}
              onChange={(event) => setExpiryDate(event.target.value)}
            />
          </div>
          <div className="form_element">
            <label htmlFor="address">{t('profile.food.address')}</label>
            <input
              type="address"
              id="address"
              name="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <button id="foodDonation_submit-btn" type="submit">
          {t('profile.food.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FoodDonation;
