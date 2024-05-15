import React from "react";
import "./Vision.css";
import {useTranslation} from 'react-i18next';
const Vision = () => {

//This is used to display our vision statement
  const {t} = useTranslation('common');

  return (
    <div className="vision" id="workid">
      <div className="vision-img"></div>
      <div className="vision-text">
        <h1 className="vision-heading">{t('homepage.vision')}<span><b>{t('homepage.vision1')}</b></span></h1>
        <p className="vision-subheading">
        {t('homepage.vision.para')}
          <br></br>
          <br></br> {t('homepage.vision.para2')}
          
        </p>
      </div>
    </div>
  );
};

export default Vision;
