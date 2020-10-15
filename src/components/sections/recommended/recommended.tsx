import React from 'react';
import { useHistory } from 'react-router-dom';
import SingleContainer from 'components/sections/single-container';
import * as StartIcon from 'assets/image/start-cases-icon.png';
import * as PaymentIcon from 'assets/image/make-payments-icon.png';
import * as JoinIcon from 'assets/image/join-cases-icon.png';
import * as AddIcon from 'assets/image/add-files-icon.png';

interface Props {}

export const Recommended: React.FC<Props> = () => {
  const history = useHistory();

  return (
    <div className="home-recommended">
      <div className="recommended-title">
        Recommended for you
      </div>
      <div className="recommended-content">
        <SingleContainer
          icon={StartIcon}
          title={"Start Cases"}
          btnLabel={"Start case"}
          handleClick={() => history.push('/case/start')}
        >
          Initiate & submit your Case online. Manage all ongoing Case submissions.
        </SingleContainer>
        <SingleContainer
          icon={PaymentIcon}
          title={"Make payments"}
          btnLabel={"Payment options"}
        >
          View fees for document submission. Manage payments online.
        </SingleContainer>
        <SingleContainer
          icon={JoinIcon}
          title={"Join Cases"}
          btnLabel={"How to join"}
        >
          Request to join an existing Case. Invite others to join.
        </SingleContainer>
        <SingleContainer
          icon={AddIcon}
          title={"Add files"}
          btnLabel={"Managing files"}
        >
          Manage all files, documents, evidence online with singular or bulk upload.
        </SingleContainer>
      </div>
    </div>
  )
};

export default Recommended;