import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional: adds blur effect while loading

const LazyImage = ({ src, alt, className, ...props }) => {
  return (
    <LazyLoadImage
      src={src} // Image source
      alt={alt} // Alt text
      className={className} // Any additional classes passed down
      effect="blur" // Optional: adds a blur effect while loading
      {...props} // Spread any other props (e.g., width, height)
    />
  );
};

export default LazyImage;
