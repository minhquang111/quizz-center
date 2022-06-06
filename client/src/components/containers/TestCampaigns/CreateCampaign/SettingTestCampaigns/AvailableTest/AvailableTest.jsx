import { Collapse, DatePicker, Select, Space, Col, Row } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';
moment().format('MMMM Do YYYY, h:mm:ss a');

function AvailableTest(props) {
  const [renderTime, setRenderTime] = useState();

  const children = [];

  function handleChange(value) {
    //console.log(`selected ${value}`);
  }

  function onChange(dates, dateStrings) {
    //console.log('From: ', dates[0], ', to: ', dates[1]);
    //console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
    setRenderTime(`${dateStrings[0]} - ${dateStrings[1]}`);
  }

  return (
    <div>
      <Collapse ghost expandIconPosition='right'>
        <Collapse.Panel
          header='Truy cập đợt thi có hiệu lực'
          key='1'
          extra={renderTime !== undefined ? renderTime : null}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <p>
                Nếu không chọn thời gian đợt thi có hiệu lực thì đợt thi sẽ có
                hiệu lực không giới hạn
              </p>
            </Col>
            <Col span={24}>
              <Space direction='vertical' dateRender={{ currentDate: moment }}>
                <DatePicker.RangePicker
                  ranges={{
                    Today: [moment(), moment()],
                    'This Month': [
                      moment().startOf('month'),
                      moment().endOf('month'),
                    ],
                  }}
                  showTime
                  format='YYYY/MM/DD HH:mm:ss'
                  onChange={onChange}
                />
              </Space>
            </Col>
            <Col>
              <p>Danh sách địa chỉ IP được phép truy cập bài test</p>
            </Col>
            <Col span={24}>
              <Select
                mode='tags'
                style={{ width: '100%' }}
                placeholder='Nhập địa chỉ IP ...'
                onChange={handleChange}
              >
                {children}
              </Select>
            </Col>
          </Row>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
}

export default AvailableTest;
