import React, { useState } from 'react';
import ModalForm from '../modal-form';
import {
  Form as AntForm,
  Select as AntSelect,
  Button as AntButton,
  DatePicker as AntDatePicker,
  Card as AntCard,
} from 'antd';
import {
  PlusCircleOutlined,
} from '@ant-design/icons';

const AntOption = AntSelect.Option;

interface Props {}

export const CaseForm: React.FC<Props> = () => {
  const [form] = AntForm.useForm();
  const [visibleApp, setVisibleApp] = useState(false);
  const [visibleRes, setVisibleRes] = useState(false);
  const [applicants, setApplicants] = useState([]);
  const [respondents, setRespondents] = useState([]);

  const onApplicants = (values: any) => {
    setApplicants(applicants.concat(values));
    if (!values.add_another) setVisibleApp(false);
  };

  const onRespondents = (values: any) => {
    setRespondents(respondents.concat(values));
    if (!values.add_another) setVisibleRes(false);
  };

  return (
    <AntForm
      form={form}
      layout='vertical'
    >
      <AntForm.Item
        label='Registry'
        name='registry'
        rules={[{ required: true, message: 'Please input the registry!' }]}
      >
        <AntSelect
          placeholder='Select'
        ></AntSelect>
      </AntForm.Item>
      <AntForm.Item
        label='Document type'
        name='document'
      >
        <AntSelect
          placeholder='Select'
        ></AntSelect>
      </AntForm.Item>
      <AntForm.Item
        label='Case type'
        name='case'
      >
        <AntSelect
          placeholder='Select'
        ></AntSelect>
      </AntForm.Item>
      <AntForm.Item
        label='Civil/Criminal'
        name='civil'
      >
        <AntSelect
          placeholder='Select'
        ></AntSelect>
      </AntForm.Item>
      <p style={{ fontSize: '16px', fontWeight: 500, marginBottom: '22px', color: '#262626' }}>Party details</p>
      <AntForm.Item>
        <AntButton
          className='add-party-button'
          block
          onClick={() => setVisibleApp(true)}
        >
          <span>Add Applicants</span>
          <PlusCircleOutlined />
        </AntButton>
        <ModalForm
          visible={visibleApp}
          name="Applicants"
          onCreate={onApplicants}
          onCancel={() => {
            setVisibleApp(false);
          }}
        />
      </AntForm.Item>
      { applicants.length > 0 &&
        <AntForm.Item>
          <AntCard
            size='small'
            title='Applicant names'
            extra={<AntButton type='link'>View more details</AntButton>}
          >
            { applicants.map((applicant: any) => <p>{applicant.name}</p>)}
          </AntCard>
        </AntForm.Item>
      }
      <AntForm.Item>
        <AntButton
          className='add-party-button'
          block
          onClick={() => setVisibleRes(true)}
        >
          <span>Add Respondents</span>
          <PlusCircleOutlined />
        </AntButton>
        <ModalForm
          visible={visibleRes}
          name="Respondents"
          onCreate={onRespondents}
          onCancel={() => {
            setVisibleRes(false);
          }}
        />
      </AntForm.Item>
      { respondents.length > 0 &&
        <AntForm.Item>
          <AntCard
            size='small'
            title='Respondent names'
            extra={<AntButton type='link'>View more details</AntButton>}
          >
            { respondents.map((respondent: any) => <p>{respondent.name}</p>)}
          </AntCard>
        </AntForm.Item>
      }
      <p style={{ fontSize: '16px', fontWeight: 500, marginBottom: '22px', color: '#262626' }}>Tell us about the Matter</p>
      <AntForm.Item
        label='Jurisdiction'
        name='jurisdiction'
        rules={[{ required: true, message: 'Please input the jurisdiction!' }]}
      >
        <AntSelect
          placeholder='Select'
        ></AntSelect>
      </AntForm.Item>
      <AntForm.Item
        label='Lower Court'
        name='lower_court'
      >
        <AntSelect
          placeholder='Select'
        ></AntSelect>
      </AntForm.Item>
      <AntForm.Item
        label='Date of Judgement'
        name='date_judgement'
      >
        <AntDatePicker style={{ width: '100%' }} />
      </AntForm.Item>
      <AntForm.Item>
        <AntButton type='primary'>File Case</AntButton>
      </AntForm.Item>
    </AntForm>
  );
};

export default CaseForm;