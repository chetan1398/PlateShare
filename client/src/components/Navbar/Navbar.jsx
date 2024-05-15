import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


/**
 * Navbar Component
 *
 * A responsive navigation bar component for a web application using React. This component handles navigation,
 * scrolls to specific components on the page, and shows different navigation options based on user authentication.
 */

const Navbar = ({ token }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu(!showMenu);
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="main">
      <div className="logo">
        <h1>Plate<span>Share</span></h1>
      </div>
      <div className={showMenu ? "nav-items mobile-menu-link" : "nav-items"}>
        <ul>
          <li>
            <button className="btn-nav" onClick={() => scrollToComponent("home")}>
              {t('homepage.home')}
            </button>
          </li>
          <li>
            <button className="btn-nav" onClick={() => scrollToComponent("aboutusid")}>
              {t('homepage.about.us')}
            </button>
          </li>
          <li>
            <button className="btn-nav" onClick={() => scrollToComponent("workid")}>
              {t('homepage.work')}
            </button>
          </li>
          <li>
            <button className="btn-nav" onClick={() => navigate("/contact")}>
              {t('homepage.contact')}
            </button>
          </li>
        </ul>
      </div>
      <div className="header-login">
  {token ? (
    <button className="btn-nav" onClick={() => navigate("/dashboard")}>
      {t('homepage.dashboard')}
    </button>
  ) : (
    <div className="l-btn">
      <button className="btn-nav" onClick={() => navigate("/login")}>
        {t('homepage.login')}
      </button>
      <button className="btn-nav" onClick={() => navigate("/signup")}>
        {t('homepage.signup')}
      </button>
    </div>
  )}
  <div className="hamburger-menu">
    <button onClick={handleClick}>
      <GiHamburgerMenu />
    </button>
  </div>
</div>

      
      
    </nav>
  );
};

export default Navbar;
