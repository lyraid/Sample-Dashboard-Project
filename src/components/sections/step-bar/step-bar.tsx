import React from 'react';
import { Steps as AntSteps } from 'antd';

const AntStep = AntSteps.Step;

interface Props {
  curStep: string;
  date: string;
}

export const StepBar: React.FC<Props> = ({ curStep, date }) => {
  const steps = [
    'Lodged',
    'Filed',
    'Listed',
    'Finalised',
  ];
  const curStepId = steps.indexOf(curStep);

  const getDescription = (step: any) => {
    const stepId = steps.indexOf(step);
    if (stepId <= curStepId) {
      return date;
    } else if (stepId === curStepId + 1) {
      return 'In progress';
    } else return "Not started";
  };

  return (
    <AntSteps current={1}>
      { steps.map((step, key) => (
          <AntStep title={step} description={getDescription(step)} key={key} />
      ))}      
    </AntSteps>
  );
};

export default StepBar