import React from 'react';
import './page-logo-loader.css';

interface Props {}

export const PageLogoLoader: React.FC<Props> = () => {
  return (
    <div className="PageLogoLoader">
      <img src={""} alt="loading..." />
    </div>
  );
};

export default PageLogoLoader;
