import React from "react";
import "./AboutUs.css";
import {useTranslation} from 'react-i18next';

const AboutUs = () => {
  const {t} = useTranslation('common');
  return (
    <div className="aboutus" id="aboutusid">
      <div className="info-text">
        <h1 className="info-heading"> {t('homepage.only')}<span><b>{t('homepage.us')}</b></span></h1>
        <p className="info-subheading">
        <b>{t('homepage.about.us.plateshare')}</b>{t('homepage.about.us.para1')}
          <br></br>
          <b>{t('homepage.about.us.para2')}</b>{t('homepage.about.us.para3')}
          <br></br>
          <b>{t('homepage.about.us.para4')}</b>{t('homepage.about.us.para5')}
        </p>
      </div>
      <div className="info-img"></div>
    </div>
  );
};

export default AboutUs;
