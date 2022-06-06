import React from 'react';
import { Row, Col, Breadcrumb, Select, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
const { Option } = Select;

function QuestionStatistic(props) {
  const handleChange = (value) => {
    //console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    //console.log(value);
  };

  return (
    <div className='question_statistic'>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to='/test-campaigns'>
                <span>Danh sách đợt thi </span>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to='/test-campaigns/:id/result'>
                <span>test1</span>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Thống kê câu hỏi</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={24}>
          <h4>test1</h4>
        </Col>
        <Col span={24}>
          <Row gutter={[8, 8]}>
            <Col>
              <Select
                defaultValue='1'
                style={{ width: 200 }}
                onChange={handleChange}
              >
                <Option value='1'>Đúng nhiều nhất </Option>

                <Option value='2'>Sai nhiều nhất</Option>
              </Select>
            </Col>
            <Col flex={1}>
              <Input.Search
                placeholder=' Nhập từ khóa'
                onSearch={onSearch}
                style={{ width: 200 }}
              />
            </Col>

            <Col>
              <Link to='/test-campaigns/:id/result'>
                <Button type='primary'>Quay Lại Đợt Thi Tuyển</Button>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <div className='white_bg pd_20'>
            <table>
              <tbody>
                <tr>
                  <th>CÂU HỎI</th>
                  <th>TRẢ LỜI ĐÚNG</th>
                  <th>TRẢ LỜI SAI</th>
                  <th>KHÔNG TRẢ LỜI</th>
                </tr>
                <tr>
                  <td>12</td>
                  <td>1</td>
                  <td>5</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default QuestionStatistic;
