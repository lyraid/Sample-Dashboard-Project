import React, { useState } from 'react';
import {
  Button as AntButton,
  Divider as AntDivider,
  Upload as AntUpload,
  message as Antmessage,
} from 'antd';
import {
  DownloadOutlined,
  SearchOutlined,
  MoreOutlined,
  LoadingOutlined,
  SelectOutlined,
} from '@ant-design/icons';

interface Props {}

export const SelectFile: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      Antmessage.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      Antmessage.error('Image must smaller than 2MB!');
    }
    console.log(isJpgOrPng, isLt2M);
    return false;
  };

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: string) => {
        setLoading(false);
        setImageUrl(imageUrl);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <SelectOutlined style={{ fontSize: "38px", color: "#595959" }}/>}
      <div className="ant-upload-text">Select a file for display</div>
    </div>
  );

  return (
    <div className='select-file'>
      <div className='select-file-header'>
        <AntButton className='select-file-header-btn' shape='circle' icon={<DownloadOutlined />} />
        <AntButton className='select-file-header-btn' shape='circle' icon={<SearchOutlined />} />
        <AntButton className='select-file-header-btn' shape='circle' icon={<MoreOutlined />} />
      </div>
      <AntDivider style={{ margin: "12px 0" }} />
      <div className='select-file-body'>
        <AntUpload
          name="select-file"
          listType="picture-card"
          className="file-selector"
          showUploadList={false}
          beforeUpload={beforeUpload}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          onChange={handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="select-file" style={{ width: '100%' }} /> : uploadButton}
        </AntUpload>
      </div>
    </div>
  );
};

export default SelectFile;