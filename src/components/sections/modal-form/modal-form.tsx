import React from 'react';
import {
  Form as AntForm,
  Modal as AntModal,
  Input as AntInput,
  Select as AntSelect,
  Button as AntButton,
} from 'antd';
import {
  PlusOutlined,
} from '@ant-design/icons';

const AntOption = AntSelect.Option;

interface Values {
  party_type: string;
  name: string;
  party_order: string;
  self_represented: string;
  email_contact: string;
  phone_contact: string;
  add_another: boolean;
}

interface Props {
  visible: boolean;
  name: string;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

export const ModalForm: React.FC<Props> = ({ visible, name, onCreate, onCancel }) => {
  const [form] = AntForm.useForm();

  const handleOk = (mode: boolean) => {
    form
      .validateFields()
      .then((values: any) => {
        form.resetFields();
        if (mode) values['add_another'] = true; else values['add_another'] = false;
        onCreate(values);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <AntModal
      width="700px"
      visible={visible}
      title={<span style={{ fontSize: '20px', color: '#0446ff' }}>Add {name}</span>}
      onCancel={onCancel}
      onOk={() => handleOk(false)}
      footer={[
        <AntButton key='add_another' type='link' onClick={() => handleOk(true)}>
          <PlusOutlined /> Add another
        </AntButton>,
        <AntButton type='primary' key='save' onClick={() => handleOk(false)}>
          Save
        </AntButton>
      ]}
    >
      <div style={{ margin: '0 150px' }}>
        <AntForm
          form={form}
          layout='vertical'
          name='applicant_form'
        >
          <AntForm.Item
            name='party_type'
            label='Party type'
            rules={[{ required: true, message: 'Please select the party type!' }]}
          >
            <AntSelect placeholder='Select'>
              <AntOption value='individual'>Individual</AntOption>
              <AntOption value='company'>Company</AntOption>
            </AntSelect>
          </AntForm.Item>
          <AntForm.Item
            name='name'
            label='Company name'
          >
            <AntInput />
          </AntForm.Item>
          <AntForm.Item
            name='party_order'
            label='Party order'
          >
            <AntInput />
          </AntForm.Item>
          <AntForm.Item
            name='self_represented'
            label='Self represented'
          >
            <AntSelect placeholder='Select' />
          </AntForm.Item>
          <AntForm.Item
            name='email_contact'
            label='Email contact'
          >
            <AntInput />
          </AntForm.Item>
          <AntForm.Item
            name='phone_contact'
            label='Phone contact'
          >
            <AntInput />
          </AntForm.Item>
        </AntForm>
      </div>
    </AntModal>
  );
};

export default ModalForm;