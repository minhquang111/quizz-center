import { DeleteOutlined, DownloadOutlined, FileTextOutlined, UploadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Input, Popover, Progress, Row, Select, Tag, Tooltip, Modal, Form } from 'antd';
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const { Option } = Select;

function ResultCampaign(props) {
  const answerData = {

    series: [44, 55, 13],
    options: {
      labels: ['Câu trả lời đúng', 'Câu trả lời sai', 'Không trả lời'],

      legend: {
        position: 'bottom',

      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#F44336', '#E91E63', '#9C27B0'],
    },

  }

  const passMarkData = {

    series: [44, 55],
    options: {

      labels: ['Đạt', 'Không đạt'],

      legend: {
        position: 'bottom',

      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#F44336', '#E91E63', '#9C27B0'],

    },

  }

  const handleChange = (value) => {
    //console.log(`selected ${value}`);
  };

  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
  };

  const [filterOptios, setFilterOptios] = useState('')

  function onClick(str) {
    setFilterOptios(str);
  }

  function renderfilterOptios() {

    const onFinish = (values) => {
      console.log('Success:', values);
    };

    return <>
      <Col span={24}>
        {filterOptios}
      </Col >
      <Col span={24}>
        <Form onFinish={onFinish}>
          <Form.Item
            name={`${filterOptios}`}
          >
            <Input placeholder={`${filterOptios}`} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">Tìm Kiếm</Button>
          </Form.Item>
        </Form>
      </Col>

    </>
  }

  function back() {
    setFilterOptios('')
  }

  function addFilterOptions() {
    return (
      <>
        <Row gutter={[8, 8]}>
          <Col flex={1}>
            {filterOptios && <span onClick={back}> <a>{'<'}</a>  </span>}

            <span>{filterOptios ? filterOptios : "Thêm tiêu chí lọc"}</span>
          </Col>
          <Col >
            <a onClick={hide}>X</a>
          </Col>

          {!filterOptios ?
            <>
              <Col span={24}>
                TIÊU CHÍ LỌC
              </Col>
              <Col span={24}>
                <a onClick={() => { onClick('Email') }}>Email</a>
                <a onClick={() => { onClick('Mã định danh') }}>Mã định danh</a>
                <a onClick={() => { onClick('Họ và Tên') }}>Họ và Tên</a>
                <a onClick={() => { onClick('Số điện thoại') }}>Số điện thoại</a>
                <a onClick={() => { onClick('Vị trí công việc') }}>Vị trí công việc</a>
                <a onClick={() => { onClick('Nhóm') }}>Nhóm</a>
                <a onClick={() => { onClick('Thời gian') }}>Thời gian</a>
                <a onClick={() => { onClick('Mã truy cập') }}>Mã truy cập</a>

              </Col>
            </> :
            <>{renderfilterOptios()}</>}
        </Row>
      </>
    )
  }


  const log = (e) => {
    //console.log(e);
  };

  const showModalDelete = () => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <ExclamationCircleOutlined />,
      content: 'Khi xoá đợt thi tuyển, tất cả kết quả đợt thi tuyển sẽ bị xoá. Bạn có muốn xoá đợt thi tuyển này?',
      okText: 'Chấp nhận',
      cancelText: 'Hủy',
      onOk() {
        //console.log('delete') 
      },
      maskClosable: true
    })
  }


  return (
    <div className='result_campaign'>
      <Row gutter={[24, 24]} >
        <Col span={24}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/test-campaigns"><span>Danh sách đợt thi </span></Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Kết quả đợt thi tuyển</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={24}>
          <Row gutter={[24, 24]} className='details'>
            <Col span={24}>
              <Row gutter={[8, 8]} align='middle'>
                <Col flex={1}>
                  <h4>dot thi</h4>
                </Col>
              </Row>
            </Col>
            <Col span={4} >
              <div className='white_bg pd_20'>
                {true ?
                  <>
                    <Row gutter={[16, 16]} justify='center'>
                      <Col>
                        <img src={require('../../../../assets/img/no_chart.png')} />
                      </Col>
                      <Col>
                        <p>Chưa cài đặt mốc đạt</p>
                      </Col>
                    </Row>
                  </> :
                  <Chart options={passMarkData.options} series={passMarkData.series} legend={passMarkData.legend} type="pie" />
                }
              </div>
            </Col>
            <Col span={8}>
              <div className='white_bg pd_20' >
                <Row gutter={[24, 24]} >
                  <Col span={12}>
                    <h6>9</h6>
                    <p>Người tham gia</p>
                  </Col>
                  <Col span={12}>
                    <h6>2</h6>
                    <p>Chưa hoàn thành</p>
                  </Col>
                </Row>
              </div>

            </Col>
            <Col span={4}>
              <div className='white_bg '>
                <Chart options={answerData.options} series={answerData.series} legend={answerData.legend} type="pie" />
              </div>
            </Col>
            <Col span={8}>
              <div className='white_bg pd_20' >
                <Row gutter={[24, 24]} >
                  <Col span={12}>
                    <h6>9</h6>
                    <p>Câu trả lời đúng</p>
                  </Col>
                  <Col span={12}>
                    <h6>2</h6>
                    <p>Câu trả lời sai</p>
                  </Col>
                  <Col span={12}>
                    <h6>2</h6>
                    <p>Không trả lời</p>
                  </Col>
                  <Col span={12}>
                    <Link to='/test-campaigns/:id/question-statistic' > Xem chi tiết {'>'}</Link>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={24}>
              <Row gutter={[8, 8]}>
                <Col>
                  <Select defaultValue="1" onChange={handleChange} style={{ width: 120 }}>
                    <Option value="1">Mới nhất</Option>
                    <Option value="2">Điểm cao nhất</Option>
                    <Option value="3">Điểm thấp nhất</Option>
                  </Select>
                </Col>
                <Col flex={1}>
                  <Popover
                    placement="bottomLeft"
                    content={addFilterOptions}
                    trigger="click"
                    visible={visible}
                    onVisibleChange={handleVisibleChange}
                  >
                    <Button type="primary">Thêm tiêu chí lọc</Button>
                  </Popover>
                </Col>
                <Col>
                  <Tooltip title="Xuất file kết quả ">
                    <Button type="primary"><DownloadOutlined /></Button>

                  </Tooltip>
                </Col>

                <Col>
                  <Tooltip title="Tải xuống câu tự luận">
                    <Button type="primary"><FileTextOutlined /></Button>

                  </Tooltip>
                </Col>
                <Col>
                  <Tooltip title="Nhập điểm câu tự luận từ file">
                    <Button type="primary"><UploadOutlined /></Button>

                  </Tooltip>
                </Col>

                <Col span={24}>
                  <Tag closable onClose={log}>
                    Email: nam17081999@gmail.com
                  </Tag>
                  <Tag closable onClose={log}>
                    Tag 2
                  </Tag>
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <div className='white_bg pd_20'>
                <table>
                  <tbody>
                    <tr >
                      <th>THÔNG TIN NGƯỜI THI TUYỂN	</th>
                      <th>PHẦN TRĂM HOÀN THÀNH </th>
                      <th>ĐIỂM</th>
                      <th>THỜI GIAN LÀM BÀI</th>
                      <th>NGÀY LÀM BÀI</th>
                    </tr>
                    <tr>
                      <td>Hoang Duc Nam</td>
                      <td>100.0% <Progress percent={100} showInfo={false} /></td>
                      <td>5</td>
                      <td>00:00:05</td>
                      <td>10:24:51 12/05/2022</td>
                      <td>
                        <span className='pass'>Đạt</span>
                      </td>
                      <td><Link to="/test-campaigns"><Button type="primary">Xem Chi Tiết</Button></Link></td>
                      <td><a onClick={showModalDelete}> < DeleteOutlined /></a></td>
                    </tr>
                    <tr>
                      <td>Hoang Duc Nam</td>
                      <td>50.0% <Progress percent={50} showInfo={false} /></td>
                      <td>5</td>
                      <td>00:00:05</td>
                      <td>10:24:51 12/05/2022</td>
                      <td>
                        <span className='not_pass'>Trượt</span>
                      </td>
                      <td><Link to="/test-campaigns"><Button type="primary">Xem Chi Tiết</Button></Link></td>
                      <td><a onClick={showModalDelete}> < DeleteOutlined /></a></td>
                    </tr>
                    <tr>
                      <td>Hoang Duc Minh</td>
                      <td> - </td>
                      <td>-</td>
                      <td>-</td>
                      <td>10:24:51 12/05/2022</td>
                      <td>

                      </td>
                      <td></td>
                      <td> <a onClick={showModalDelete}> < DeleteOutlined /></a></td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </Col>


          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ResultCampaign;