import React from "react";
import {useTranslation} from 'react-i18next';

//Function display the Dashboard
const Dashboard = () => {
  const {t} = useTranslation('common');
  return (
    <div>
      <h1>{t('homepage.dashboard')}</h1>
      <p>{t('profile.food.don')}</p>
    </div>
  );
};

export default Dashboard;
