// Footer.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous d'avoir React Router installé
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; 2023 PaleoData. Tous droits réservés. <Link to="/mentions-legales">Mentions légales</Link>
        </p>
        <img src="Logo.png" alt="Logo développeur" />
      </div>
    </footer>
  );
};

export default Footer;
