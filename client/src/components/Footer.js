import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return(
    <footer className="footer donot-print">
        <span className="copyright">
             &copy; {(new Date()).getFullYear()} Muhammed Salman Shamsi
        </span>
    </footer>
  );
};
export default Footer;
