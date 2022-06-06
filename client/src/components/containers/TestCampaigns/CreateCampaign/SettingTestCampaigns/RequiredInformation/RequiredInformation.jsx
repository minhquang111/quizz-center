import { Checkbox, Col, Collapse, Row } from 'antd';
import React, { useState } from 'react';
import {
  RequiredInformationType,
  renderExtra,
} from '../../../../../../utils/utils';

function RequiredInformation(props) {
  // const [requiredInformation, setRequiredInformation] = useState(['Họ và tên'])

  const [valueExtra, setValueExtra] = useState([
    {
      status: false,
      name: 'Số điện thoại',
    },
    {
      status: true,
      name: 'Họ và tên',
    },
    {
      status: false,
      name: 'Nhóm',
    },
    {
      status: false,
      name: 'Email',
    },
    {
      status: false,
      name: 'Mã định danh',
    },
    {
      status: false,
      name: 'Vị trí công việc',
    },
  ]);

  function onChangeRequiredInformation(checkedValues) {
    // //console.log('checked = ', checkedValues);

    for (let i = 0; i < valueExtra.length; i++) {
      if (checkedValues.indexOf(i) !== -1) {
        setValueExtra((prev) => {
          prev[i].status = true;
          return [...prev];
        });
      } else if (checkedValues.indexOf(i) === -1) {
        setValueExtra((prev) => {
          prev[i].status = false;
          return [...prev];
        });
      }
    }
  }

  return (
    <>
      <Collapse ghost className='white_bg' expandIconPosition='right'>
        <Collapse.Panel
          header='Yêu cầu thông tin'
          key='1'
          extra={renderExtra(valueExtra).join(', ')}
        >
          <Checkbox.Group
            onChange={onChangeRequiredInformation}
            defaultValue={`${RequiredInformationType.full_name}`}
          >
            <Row gutter={[16, 16]}>
              <Col span={7}>
                <Checkbox value={RequiredInformationType.phone}>
                  Số điện thoại
                </Checkbox>
              </Col>
              <Col span={7}>
                <Checkbox value={RequiredInformationType.full_name}>
                  Họ và tên
                </Checkbox>
              </Col>
              <Col span={7}>
                <Checkbox value={RequiredInformationType.group}>Nhóm</Checkbox>
              </Col>
              <Col span={7}>
                <Checkbox value={RequiredInformationType.email}>Email</Checkbox>
              </Col>
              <Col span={7}>
                <Checkbox value={RequiredInformationType.id}>
                  Mã định danh
                </Checkbox>
              </Col>
              <Col span={7}>
                <Checkbox value={RequiredInformationType.position}>
                  Vị trí công việc
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Collapse.Panel>
      </Collapse>
    </>
  );
}

export default RequiredInformation;
