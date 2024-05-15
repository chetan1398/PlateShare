import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Footer.css";
import {useTranslation} from 'react-i18next';

/**
 * 
 * A React functional component designed to display the footer section of a website, featuring
 * localized text content and social media icons. This component uses internationalization
 * capabilities provided by the `react-i18next` library to support multiple languages.
 * 
 */

const Footer = () => {   
  const {t} = useTranslation('common');
  return (
    <div className="footer">
      <div className="heading-footer">
        Plate<span>Share</span>
      </div>
      <div className="div1">
        <h4 className="footer-h4">{t('homepage.who.we.are')}</h4>
        <p className="footer-p">{t('homepage.involved')}</p>
        <p className="footer-p">{t('homepage.work')}</p>
        <p className="footer-p">{t('homepage.vision')}</p>
        <p className="footer-p">{t('homepage.contact')}</p>
      </div>
      <div className="div2">
        <h4 className="footer-h4">{t('homepage.involved')}</h4>
        <p className="footer-p">{t('homepage.request')}</p>
        <p className="footer-p">{t('homepage.partner')}</p>
      </div>
      <div className="div3">
        <h4 className='footer-h4 className="footer-p"'>{t('homepage.socials')}</h4>
        <div className="footer-icons">
          <p className="footer-p">
            <FaInstagram size={40} />
          </p>
          <p className="footer-p">
            <FaTwitter size={40} />
          </p>
          <p className="footer-p">
            <FaFacebook size={40} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
