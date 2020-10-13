import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="container mt-3 pb-5">
        {children}
      </div>
      <Footer />
    </div>
  );
};
