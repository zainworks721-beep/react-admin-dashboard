import React, { useState } from 'react';
import { Button, Modal, Upload, Rate, QRCode, message, Space, Divider } from 'antd';
import { UploadOutlined, StarFilled, QrcodeOutlined, SettingOutlined } from '@ant-design/icons';
import './UserModal.css';

const UserModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = () => {
    setIsModalOpen(false);

    message.success({
      content: 'Settings saved successfully!',
      className: 'dark-message-toast',
    });

  };

  return (
    <div className="settings-trigger-wrapper">
      <Button
        type="primary"
        icon={<SettingOutlined />}
        onClick={() => setIsModalOpen(true)}
        className="settings-btn"
      >
        Open Settings
      </Button>

   <Modal
  title={
    <div className="modal-custom-title">
      <SettingOutlined className="title-icon" />
      <span>Quick Actions & Settings</span>
    </div>
  }
  open={isModalOpen}
  onOk={handleSave}
  onCancel={() => setIsModalOpen(false)}
  okText="Save Changes"
  cancelText="Cancel"
  rootClassName="dark-custom-modal"
  centered
>
  
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
         
          <div className="modal-section">
            <label className="section-label">Upload Profile Picture</label>
            <Upload maxCount={1} showUploadList={true}>
              <Button icon={<UploadOutlined />} className="dark-upload-btn">
                Click to Upload
              </Button>
            </Upload>
          </div>

          <Divider className="dark-divider" />

   
          <div className="modal-section">
            <label className="section-label">System Rating</label>
            <div className="rating-wrapper">
              <Rate defaultValue={4} character={<StarFilled />} className="custom-rate" />
            </div>
          </div>

          <Divider className="dark-divider" />


          <div className="modal-section">
            <label className="section-label">Share Dashboard Access</label>
            <div className="qr-card">
              <QRCode
                value="https://ant.design"
                size={110}
                color="#f8fafc"
                bgColor="transparent"
                bordered={false}
              />
              <div className="qr-info">
                <span className="qr-title"><QrcodeOutlined /> Scan to Connect</span>
                <span className="qr-desc">Instant mobile admin view</span>
              </div>
            </div>
          </div>
        </Space>
      </Modal>
    </div>
  );
};

export default UserModal;