import React from 'react';
import StepBar from 'components/sections/step-bar';

interface Props {
  caseData: any;
}

export const CaseDetailProgress: React.FC<Props> = ({ caseData }) => {
  return (
    <div className="case-detail-progress case-detail-section">
      <div className="progress-header">
        <span style={{ fontWeight: "bold", marginRight: "24px" }}>{caseData.title}</span>
        <span>{caseData.number}</span>
      </div>
      <div className="progress-content">
        <StepBar
          curStep={caseData.status}
          date={caseData.created}
        />
      </div>
    </div>
  );
};

export default CaseDetailProgress;