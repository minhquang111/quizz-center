import { CalendarOutlined, FolderOutlined } from '@ant-design/icons';
import { Col, Input, Radio, Row, Select, Button } from 'antd';
import React from 'react';
import Required from '../../../../commons/Required';
import { Link } from 'react-router-dom';

function SelectTest(props) {
  const onSearch = (value) => {
    //console.log(value);
  };

  function handleChange(value) {
    //console.log(`selected ${value}`);
  }

  const [value, setValue] = React.useState();

  const onChangeRadio = (e) => {
    // //console.log('radio checked', e.target.value);
    setValue(e.target.value);
    e.target.value > 0
      ? props.setCheckSelectTest(true)
      : props.setCheckSelectTest(false);
  };

  const onClickBtnContinue = () => {
    if (props.checkSelectTest) {
      props.setCurrent(1);
    } else {
      props.modalError();
    }
  };

  return (
    <>
      <div className='pd_20 select_test white_bg'>
        <Row gutter={[8, 8]}>
          <Col flex={1}>
            <h6 className='font_weight_bold'>
              {' '}
              Chọn đề thi <Required />
            </h6>
          </Col>
          <Col>
            <Input.Search
              placeholder='Tìm kiếm đề thi'
              onSearch={onSearch}
              enterButton
            />
          </Col>
          <Col>
            <Select
              defaultValue='all'
              onChange={handleChange}
              style={{ width: 150 }}
            >
              <Select.Option value='all'>Tất cả danh mục</Select.Option>
              <Select.Option value='1'>1</Select.Option>
            </Select>
          </Col>
          <Col span={24}>
            <Radio.Group onChange={onChangeRadio} value={value}>
              <ul>
                <li>
                  <Radio value={1}>
                    <p>test 1</p>
                    <h6>
                      {' '}
                      <CalendarOutlined /> 11/05/2022 <FolderOutlined /> test
                    </h6>
                  </Radio>
                </li>
                <li>
                  <Radio value={2}>
                    <p>test 1</p>
                    <h6>
                      {' '}
                      <CalendarOutlined /> 11/05/2022 <FolderOutlined /> test
                    </h6>
                  </Radio>
                </li>
                <li>
                  <Radio value={3}>
                    <p>test 1</p>
                    <h6>
                      {' '}
                      <CalendarOutlined /> 11/05/2022 <FolderOutlined /> test
                    </h6>
                  </Radio>
                </li>
              </ul>
            </Radio.Group>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SelectTest;
