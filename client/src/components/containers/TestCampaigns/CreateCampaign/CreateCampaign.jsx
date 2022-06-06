import { Breadcrumb, Col, Row, Modal, Button, message, Steps } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Preview from './Preview/Preview';
import SelectTest from './SelectTest/SelectTest';
import SettingTestCampaigns from './SettingTestCampaigns/SettingTestCampaigns';
const { Step } = Steps;

function CreateCampaign() {
  const [current, setCurrent] = useState(0);
  const [checkSelectTest, setCheckSelectTest] = useState(false);

  const steps = [
    {
      title: 'Chọn đề thi tuyển',
      content: <SelectTest setCheckSelectTest={setCheckSelectTest} />,
      description: 'Đề thi không thể thay đổi sau khi tạo đợt thi',
    },
    {
      title: 'Cài đặt đợt thi',
      content: <SettingTestCampaigns />,
      description: 'Tên đợt thi, mã truy cập, thời gian',
    },
    {
      title: 'Xem trước đợt thi',
      content: <Preview />,
      description: 'Xem cách hiển thị của đợt thi đã tạo',
    },
  ];

  function modalError() {
    Modal.error({
      title: 'Lỗi',
      content: 'Vui lòng chọn đề thi để tiếp tục',
      maskClosable: true,
    });
  }

  const onChange = (current) => {
    // console.log('onChange:', current);
    if (checkSelectTest) {
      setCurrent(current);
    } else {
      modalError();
    }
    if (current === 0) {
      setCheckSelectTest(false);
    }
  };

  const onClickBtnContinue = () => {
    if (checkSelectTest) {
      setCurrent(current + 1);
    } else {
      modalError();
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <Row gutter={[24, 24]} className='create_campaign'>
        <Col span={24}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to='/test-campaigns'>
                <span>Danh sách đợt thi </span>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Tạo đợt thi tuyển</Breadcrumb.Item>
          </Breadcrumb>
        </Col>

        <Col span={24}>
          <Steps current={current} className='pd_20 white_bg'>
            {steps.map((item) => (
              <Step
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </Steps>
        </Col>

        <Col span={24}>
          <div className='steps-content'>{steps[current].content}</div>
        </Col>
        <Col span={24}>
          <div className='steps-action'>
            {current === 0 && (
              <Row gutter={[16, 16]} justify='end'>
                <Col>
                  <Link to='/test-campaigns'>
                    <Button>Hủy </Button>
                  </Link>
                </Col>
                <Col>
                  <Button onClick={onClickBtnContinue} type='primary'>
                    Tiếp Tục
                  </Button>
                </Col>
              </Row>
            )}
            {current === 1 && (
              <Row gutter={[16, 16]} justify='end'>
                <Col offset={13}>
                  <Link to='/test-campaigns'>
                    <Button>Hủy </Button>
                  </Link>
                </Col>
                <Col>
                  <Link to={`/test-campaigns/:id/edit`}>
                    <Button type='primary'>Tạo Mới</Button>
                  </Link>
                </Col>
              </Row>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CreateCampaign;
