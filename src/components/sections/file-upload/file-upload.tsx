import React from 'react';
import {
  Upload as AntUpload,
} from 'antd';
import {
  FilePdfOutlined,
} from '@ant-design/icons';

interface Props {}

export const FileUpload: React.FC<Props> = () => {
  return (
    <div className='file-upload'>
      <p className='file-upload-header'>Your file will display here once uploaded</p>
      <div className='file-upload-body'>
        <AntUpload.Dragger
          className='file-uploader'
          name='files'
          action='/upload.do'
        >
          <p className='upload-file-drag-icon'>
            <FilePdfOutlined />
          </p>
          <p className='upload-file-text'>Drag & Drop</p>
          <p className='upload-file-hint'>or click to add your PDF file to initiate the case</p>
        </AntUpload.Dragger>
      </div>
    </div>
  );
};

export default FileUpload;