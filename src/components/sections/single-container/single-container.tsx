import React from 'react';
import { Button as AntButton } from 'antd';

interface Props {
  icon: any;
  title: string;
  btnLabel: string;
  handleClick?: () => void;
}

export const SingleContainer: React.FC<Props> = ({
  icon,
  title,
  btnLabel,
  handleClick,
  children
}) => {

  return (
    <div className="single-container">
      <div className="single-container-header">
        <div>
          <img src={icon} alt="start cases" />
          <span className="single-container-title">{title}</span>
        </div>
      </div>
      <div className="single-container-description">{children}</div>
      <div className="single-container-button">
        <AntButton type='link' onClick={handleClick}>{btnLabel}</AntButton>
      </div>
    </div>
  )
};

export default SingleContainer;