import {
  CalendarOutlined,
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  FileAddFilled,
  LinkOutlined,
  PlusCircleFilled,
} from '@ant-design/icons';
import {
  Button,
  Col,
  Input,
  message,
  Row,
  Select,
  Switch,
  Tooltip,
  Modal,
} from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dot from '../../commons/Dot';
import { ExclamationCircleOutlined } from '@ant-design/icons';

function TestCampaigns(props) {
  const onSearch = (value) => {
    //console.log(value);
  };

  function handleChange(value) {
    //console.log(`selected ${value}`);
  }

  function onChange(checked) {
    //console.log(`switch to ${checked}`);
    message.success('Cập nhật trạng thái thành công');
  }

  const showModalDelete = () => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <ExclamationCircleOutlined />,
      content:
        'Khi xoá đợt thi tuyển, tất cả kết quả đợt thi tuyển sẽ bị xoá. Bạn có muốn xoá đợt thi tuyển này?',
      okText: 'Chấp nhận',
      cancelText: 'Hủy',
      onOk() {
        //console.log('delete')
      },
      maskClosable: true,
    });
  };

  const showModalCopy = () => {
    Modal.confirm({
      title: 'Nhân bản',
      icon: <ExclamationCircleOutlined />,
      content: 'Bạn có muốn nhân bản đợt thi này không?',
      okText: 'Có, nhân bản',
      cancelText: 'Có, nhân bản',
      onOk() {
        //console.log('copy')
      },
      maskClosable: true,
    });
  };

  return (
    <div className='test_campaigns'>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col flex={1}>
              <h6> Danh sách đợt thi</h6>
            </Col>
            <Col>
              <Button type='primary'>
                <FileAddFilled />
                Nhập Điểm Câu Tự Luận Từ File
              </Button>
            </Col>
            <Col>
              <Link to='create'>
                <Button type='primary'>
                  <PlusCircleFilled /> Tạo Đợt Thi
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col flex={1}>
          <Input.Search
            placeholder='Tìm kiếm đợt thi'
            onSearch={onSearch}
            enterButton
          />
        </Col>
        <Col offset={12}>
          <Select
            defaultValue='Tạo gần đây'
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Select.Option value='1'>Tạo gần đây</Select.Option>
            <Select.Option value='2'>A - Z</Select.Option>
          </Select>
        </Col>

        <Col span={24}>
          <div className='pd_15 white_bg'>
            <Row gutter={[24, 24]} justify='space-between' align='middle'>
              <Col>
                <Dot />
              </Col>
              <Col flex={1}>
                <h5>dot thi 1</h5>
                <div className='link_copy'>
                  <span>
                    {' '}
                    <CalendarOutlined /> Vô thời hạn
                  </span>
                  <span>
                    {' '}
                    <LinkOutlined />{' '}
                    https://e.testcenter.vn/t/cUV6V3gOJFAOM1RcRyYED0F4SHIX
                  </span>
                </div>
              </Col>
              <Col offset={2}>
                <Tooltip placement='top' title='Cập nhật'>
                  <Link to={`/test-campaigns/:id/edit`}>
                    <Button type='text'>
                      <EditOutlined />
                    </Button>
                  </Link>
                </Tooltip>
                <Tooltip placement='top' title='Nhân bản'>
                  <Button type='text' onClick={showModalCopy}>
                    <CopyOutlined />
                  </Button>
                </Tooltip>
                <Tooltip placement='top' title='Xóa'>
                  <Button type='text' onClick={showModalDelete}>
                    <DeleteOutlined />
                  </Button>
                </Tooltip>
                <Switch defaultChecked onChange={onChange} />
                <Link to={`/test-campaigns/:id/result`}>
                  <Button type='primary'>Kết Quả</Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TestCampaigns;
