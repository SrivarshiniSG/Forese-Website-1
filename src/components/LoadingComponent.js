import React, { useEffect } from 'react';
import './LoadingComponentStyles.css';

const LoadingComponent = () => {
  useEffect(() => {
    // Disable scrolling when the loading component is active
    document.body.style.overflow = 'hidden';

    // Restore scrolling once the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="creative-loader">
      <div className="logo-container">
        <img src="/foresebluelogo.png" alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default LoadingComponent;
