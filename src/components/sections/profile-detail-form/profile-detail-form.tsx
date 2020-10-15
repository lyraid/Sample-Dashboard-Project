import React from 'react';
import {
  Form as AntForm,
  Input as AntInput,
  Select as AntSelect,
  Button as AntButton,
  Row as AntRow,
  Col as AntCol,
} from 'antd';

interface Props {
  mode: string;
}

export const ProfileDetailForm: React.FC<Props> = ({ mode }) => {
  const [form] = AntForm.useForm();

  return (
    <AntForm
      form={form}
      layout='vertical'
    >
      <AntForm.Item
        label={mode === 'personal' ? 'Email address' : 'Organisation name'}
        name={mode === 'personal' ? 'email' : 'organisation_name'}
      >
        <AntInput placeholder={mode === 'personal' ? 'jrichards@bigfirm.com' : 'Bigfirm'} />
      </AntForm.Item>
      <AntForm.Item
        label='First name'
        name='first_name'
      >
        <AntInput placeholder='Jackie' />
      </AntForm.Item>
      <AntForm.Item
        label='Surname'
        name='surname'
      >
        <AntInput placeholder='Richards' />
      </AntForm.Item>
      <AntForm.Item
        label='Address for service'
        name='address'
      >
        <AntInput placeholder='Example Address, 123456' />
      </AntForm.Item>
      <AntRow gutter={[8, 0]}>
        <AntCol span={12}>
          <AntForm.Item
            label='State'
            name='state'
          >
            <AntSelect
              placeholder='Select'
            ></AntSelect>
          </AntForm.Item>
        </AntCol>
        <AntCol span={12}>
          <AntForm.Item
            label='Postcode'
            name='postcode'
          >
            <AntInput placeholder='Add' />
          </AntForm.Item>
        </AntCol>
      </AntRow>
      <AntForm.Item
        label='Contact number'
        name='contact'
      >
        <AntInput placeholder='Example 0444 444 444' />
      </AntForm.Item>
      <AntForm.Item>
        <AntButton type='primary'>Update personal details</AntButton>
      </AntForm.Item>
    </AntForm>
  );
};

export default ProfileDetailForm;