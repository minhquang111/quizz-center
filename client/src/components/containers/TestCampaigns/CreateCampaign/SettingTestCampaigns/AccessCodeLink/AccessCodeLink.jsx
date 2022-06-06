import {
  Button,
  Collapse,
  Input,
  Modal,
  Radio,
  Row,
  Col,
  InputNumber,
} from 'antd';
import React, { useState } from 'react';
import { PlusCircleFilled } from '@ant-design/icons';
import Required from '../../../../../commons/Required';
import { AccessCodeType } from '../../../../../../utils/utils';

function AccessCodeLink(props) {
  const [value, setValue] = useState(AccessCodeType.public);

  const [extraTip, setExtraTip] = useState('Không có');

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (e) => {
    //console.log('radio checked', e.target.value);
    const valueCheck = e.target.value;
    setValue(valueCheck);
    if (valueCheck === AccessCodeType.password) {
      setExtraTip('Một mã');
    } else if (valueCheck === AccessCodeType.access_code) {
      setExtraTip('Danh sách mã');
    } else if (valueCheck === AccessCodeType.public) {
      setExtraTip('Không có');
    }
  };

  const onAddCode = () => {
    prompt('Nhập số mã bạn muốn tạo tự động', 25);
  };

  function onChangeInputNumber(value) {
    //console.log('changed', value);
  }
  //console.log(value)

  function Password() {
    return (
      <>
        <Row gutter={[8, 8]}>
          <Col>
            <p>
              Nhập mã duy nhất dùng chung cho tất cả các ứng viên truy cập vào
            </p>
          </Col>
          <Col span={24}>
            <Input placeholder='Nhập mã' />
          </Col>
        </Row>
      </>
    );
  }

  function AccessCode() {
    return (
      <>
        <Row gutter={[8, 8]}>
          <Col>
            <p>
              Mỗi ứng viên sẽ dùng một mã trong danh sách bạn tạo để truy cập
              vào link thi tuyển
            </p>
          </Col>
          <Col span={24}>
            <Button type='primary' onClick={showModal}>
              <PlusCircleFilled /> Tạo Mã
            </Button>

            <Modal
              title='Tạo danh sách mã'
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              okText='Lưu'
              cancelText='Hủy'
            >
              <Row gutter={[16, 16]}>
                <Col flex={1}>
                  <p>
                    Nhập mã vào form hoặc tạo tự động từ hệ thống <Required />
                  </p>
                </Col>
                <Col>
                  <Button type='primary' onClick={onAddCode}>
                    Tạo Mã Tự Động
                  </Button>
                </Col>
                <Col span={24}>
                  <Input.TextArea rows={6} />
                </Col>
              </Row>
            </Modal>
          </Col>
          <Col span={24}>
            <p>
              Số lần làm bài/mã <Required />
            </p>
          </Col>
          <Col span={24}>
            <InputNumber min={1} onChange={onChangeInputNumber} />
          </Col>
        </Row>
      </>
    );
  }

  function Public() {
    return <p>Ai cũng có quyền truy cập vào link và thực hiện thi tuyển</p>;
  }

  return (
    <div>
      <Collapse ghost className='white_bg' expandIconPosition='right'>
        <Collapse.Panel header='Mã truy cập đợt thi' key='1' extra={extraTip}>
          <Row gutter={[16, 16]}>
            <Col>
              <Radio.Group
                onChange={onChange}
                value={value}
                defaultValue={AccessCodeType.public}
              >
                <Radio value={AccessCodeType.password}>Một mã</Radio>
                <Radio value={AccessCodeType.access_code}>Danh sách mã</Radio>
                <Radio value={AccessCodeType.public}>Không có</Radio>
              </Radio.Group>
            </Col>
            <Col>
              {(() => {
                if (value === AccessCodeType.password) return <Password />;
                if (value === AccessCodeType.access_code) return <AccessCode />;
                if (value === AccessCodeType.public) return <Public />;
              })()}
            </Col>
          </Row>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
}

export default AccessCodeLink;
