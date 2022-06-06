import React, { useState } from 'react';
import { Breadcrumb, Row, Col, Button, message, Switch } from 'antd';
import { Link } from 'react-router-dom';
import Dot from '../../../../commons/Dot';
import { CopyOutlined, SettingOutlined, ProjectOutlined, LinkOutlined } from '@ant-design/icons'
import { QRCodeSVG } from 'qrcode.react'
import SettingTestCampaigns from '../SettingTestCampaigns/SettingTestCampaigns';
import copy from 'copy-text-to-clipboard';

function Preview(props) {
  const [renderSetting, setRenderSetting] = useState(false);

  const onClickBtnCopy = () => {
    copy('hello');
    message.success({
      content: 'Sao chép thành công',
    });
  };

  const onChange = (checked) => {
    //console.log(`switch to ${checked}`);
    message.success('Cập nhật trạng thái thành công');
  };

  function onClickSetting() {
    setRenderSetting(true);
  }

  return (
    <div className='preview'>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to='/test-campaigns'>Danh sách đợt thi</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>dot thi</Breadcrumb.Item>
          </Breadcrumb>
        </Col>

        {!renderSetting ? (
          <>
            <Col span={24}>
              <Row gutter={[8, 8]} align='middle'>
                <Col flex={1}>
                  <h4>dot thi</h4>
                </Col>
                <Col>
                  <Button type='primary' onClick={onClickSetting}>
                    <SettingOutlined /> Cài Đặt
                  </Button>
                </Col>
                <Col>
                  <Button>
                    {' '}
                    <ProjectOutlined /> Xem Kết Quả
                  </Button>
                </Col>
                <Col>
                  <Switch defaultChecked onChange={onChange} />
                </Col>
              </Row>
            </Col>

            <Col span={9}>
              <div className='white_bg pd_20'>
                <Row gutter={[8, 8]} align='middle'>
                  <Col flex={1}>
                    <h6>Thông tin đợt thi tuyển</h6>
                  </Col>
                  <Col>
                    <p>
                      Đang hoạt động <Dot />{' '}
                    </p>
                  </Col>
                  <Col span={24}>
                    <p>LINK ĐỢT THI</p>
                  </Col>
                  <Col span={20}>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='http://your_url_here.html'
                    >
                      http://localhost:3000/test-campaigns/:id/edit
                    </a>
                  </Col>
                  <Col span={4}>
                    <Button type='primary' onClick={onClickBtnCopy}>
                      <CopyOutlined />
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Row gutter={[16, 16]}>
                      <Col span={24}>
                        <p>MÔ TẢ</p>
                        <p>ewf</p>
                      </Col>
                      <Col span={24}>
                        <p>ĐỀ THI</p>
                        <Link to='/test-campaigns'>dot thi</Link>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={12}>
                    <p>QR THAM GIA THI</p>
                    <QRCodeSVG value='https://google.com/' />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={15}>
              <div className='white_bg pd_20'>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <h6>Cài đặt & quyền truy cập</h6>
                  </Col>
                  <Col span={12}>
                    <p>TRUY CẬP ĐỢT THI CÓ HIỆU LỰC</p>
                    <span>Truy cập không giới hạn</span>
                  </Col>
                  <Col span={12}>
                    <p>KẾT QUẢ TEST</p>
                    <span>Điểm, Phần trăm hoàn thành, Chi tiết</span>
                  </Col>
                  <Col span={12}>
                    <p>YÊU CẦU THÔNG TIN</p>
                    <span>Họ và tên</span>
                  </Col>
                  <Col span={12}>
                    <p>MÃ TRUY CẬP ĐỢT THI</p>
                    <span>Không có mã truy cập</span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <Link to='/test-campaigns'>
                <Button>Hủy </Button>
              </Link>
            </Col>
          </>
        ) : (
          <>
            <Col span={24}>
              <Row gutter={[8, 8]} align='middle'>
                <Col flex={1}>
                  <h4>dot thi</h4>
                </Col>
              </Row>
            </Col>
            <SettingTestCampaigns />
          </>
        )}
      </Row>
    </div>
  );
}

export default Preview;
