import React from 'react';

interface Props {}

export const PageContent: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div
      className="page-content"
      {...props}
    >
      {children}
    </div>
  )
};

export default PageContent;