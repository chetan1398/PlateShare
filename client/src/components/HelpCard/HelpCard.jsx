import React from "react";
import "./HelpCard.css";
import {useTranslation} from 'react-i18next';

//Const required is used to display number of user who got benfited using our website.
const HelpCard = () => {
  const {t} = useTranslation('common');
  return (
    <div className="helpcard">
      <h1 className="help-heading">
      {t('homepage.helped.total')}<span>{t('homepage.count')}</span> {t('homepage.and')}
      </h1>
    </div>
  );
};

export default HelpCard;
