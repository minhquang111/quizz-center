import {
  Checkbox,
  Col,
  Collapse,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Button,
} from 'antd';
import React, { useState } from 'react';
import {
  ResultTestType,
  CertificatesType,
  renderExtra,
  AntiCheatingType,
} from '../../../../../utils/utils';
import AccessCodeLink from './AccessCodeLink/AccessCodeLink';
import AvailableTest from './AvailableTest/AvailableTest';
import RequiredInformation from './RequiredInformation/RequiredInformation';
import { Link } from 'react-router-dom';

const { Option } = Select;

function SettingTestCampaigns(props) {
  const [form] = Form.useForm();

  const [formSettingPassMark] = Form.useForm();

  const [renderSettingPassMark, setRenderSettingPassMark] = useState();

  const [requiredMark, setRequiredMarkType] = useState('optional');

  const [valueAntiCheating, setValueAntiCheating] = useState([
    {
      status: false,
      name: 'Chống copy',
    },
    {
      status: false,
      name: 'Toàn màn hình',
    },
    {
      status: false,
      name: 'Chống paste',
    },
    {
      status: false,
      name: 'Thoát khỏi màn hình',
    },
  ]);

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  ///ResultTest
  const [resultTest, setResultTest] = useState([['Điểm'], ['Đạt/trượt']]);

  //Kết quả test / Điểm:
  function onChangeCheckboxScore(checkedValues) {
    //console.log('checked = ', checkedValues);

    if (checkedValues.indexOf(1) >= 0 && checkedValues.indexOf(2) == -1) {
      setResultTest((prev) => {
        const b = (prev[0] = ['Điểm']);
        return [b, prev[1]];
      });
    }
    if (checkedValues.indexOf(2) >= 0 && checkedValues.indexOf(1) == -1) {
      setResultTest((prev) => {
        const b = (prev[0] = ['Phần trăm hoàn thành']);
        return [b, prev[1]];
      });
    }
    if (checkedValues.indexOf(1) >= 0 && checkedValues.indexOf(2) > -1) {
      setResultTest((prev) => {
        const b = (prev[0] = ['Điểm', 'Phần trăm hoàn thành']);
        return [b, prev[1]];
      });
    }
    if (checkedValues.indexOf(1) == -1 && checkedValues.indexOf(2) == -1) {
      setResultTest((prev) => {
        const b = (prev[0] = []);
        return [b, prev[1]];
      });
    }
  }

  //Kết quả test / Kết quả:
  function onChangeCheckboxResult(checkedValues) {
    // //console.log('checked = ', checkedValues);

    if (checkedValues.indexOf(3) >= 0 && checkedValues.indexOf(4) == -1) {
      setResultTest((prev) => {
        const b = (prev[1] = ['Chi tiết']);
        return [prev[0], b];
      });
    }
    if (checkedValues.indexOf(4) >= 0 && checkedValues.indexOf(3) == -1) {
      setResultTest((prev) => {
        const b = (prev[0] = ['Đạt/trượt']);
        return [prev[0], b];
      });
    }
    if (checkedValues.indexOf(3) >= 0 && checkedValues.indexOf(4) > -1) {
      setResultTest((prev) => {
        const b = (prev[0] = ['Chi tiết', 'Đạt/trượt']);
        return [prev[0], b];
      });
    }
    if (checkedValues.indexOf(3) == -1 && checkedValues.indexOf(4) == -1) {
      setResultTest((prev) => {
        const b = (prev[0] = []);
        return [prev[0], b];
      });
    }
  }

  const extraResultTest = resultTest[0].concat(resultTest[1]).join(', ');

  function onChangePassMark(value) {
    setRenderSettingPassMark(value);
  }

  function onChange2(checkedValues) {
    //console.log('checked = ', checkedValues);
  }

  function onChangeAntiCheating(checkedValues) {
    //console.log('checked = ', checkedValues);
    for (let i = 0; i < valueAntiCheating.length; i++) {
      if (checkedValues.indexOf(i) !== -1) {
        setValueAntiCheating((prev) => {
          prev[i].status = true;
          return [...prev];
        });
      } else if (checkedValues.indexOf(i) === -1) {
        setValueAntiCheating((prev) => {
          prev[i].status = false;
          return [...prev];
        });
      }
    }
  }

  function onChangeUnfocusLimit(checkedValues) {
    //console.log('checked = ', checkedValues);
  }

  return (
    <>
      <Row gutter={[24, 24]}>
        <Col span={12} className=''>
          <div className='white_bg pd_20'>
            <Form form={form} layout='vertical'>
              <Form.Item
                label='Tên đợt thi tuyển'
                required='true'
                rules={[
                  {
                    required: true,
                    message: 'Tên đợt thi không được bỏ trống',
                  },
                ]}
              >
                <Input placeholder='Nhập tên' />
              </Form.Item>
              <Form.Item label='Thông báo khi đạt'>
                <Input.TextArea rows={6} placeholder='Nhập giới thiệu' />
                Trường này sẽ hiện khi ứng viên làm bài thi
              </Form.Item>
            </Form>
            <p>Đề thi tuyển đã chọn</p>
            <p>test 2</p>
          </div>
        </Col>
        <Col span={12}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <AccessCodeLink />
            </Col>

            <Col span={24}>
              <div className='white_bg'>
                <AvailableTest />
              </div>
            </Col>
            <Col span={24}>
              <Collapse ghost className='white_bg' expandIconPosition='right'>
                <Collapse.Panel
                  header='Kết quả test'
                  key='1'
                  extra={extraResultTest}
                >
                  <Row gutter={[8, 8]}>
                    <Col span={4}>Điểm:</Col>
                    <Col span={20}>
                      <Checkbox.Group
                        onChange={onChangeCheckboxScore}
                        defaultValue={`${ResultTestType.score}`}
                      >
                        <Row gutter={[8, 8]}>
                          <Col span={24}>
                            <Checkbox value={ResultTestType.score}>
                              Điểm
                            </Checkbox>
                          </Col>
                          <Col span={24}>
                            <Checkbox value={ResultTestType.complete_percent}>
                              Phần trăm hoàn thành
                            </Checkbox>
                          </Col>
                        </Row>
                      </Checkbox.Group>
                    </Col>
                    <Col span={4}>Kết quả:</Col>
                    <Col span={20}>
                      <Checkbox.Group
                        onChange={onChangeCheckboxResult}
                        defaultValue={`${ResultTestType.pass_or_not_pass}`}
                      >
                        <Row gutter={[8, 8]}>
                          <Col span={24}>
                            <Checkbox value={ResultTestType.detail}>
                              Chi tiết
                            </Checkbox>
                          </Col>
                          <Col span={24}>
                            <Checkbox value={ResultTestType.pass_or_not_pass}>
                              Đạt/trượt
                            </Checkbox>
                          </Col>
                        </Row>
                      </Checkbox.Group>
                    </Col>
                  </Row>
                </Collapse.Panel>
              </Collapse>
            </Col>
            <Col span={24}>
              <RequiredInformation />
            </Col>
            <Col span={24}>
              <Collapse ghost className='white_bg' expandIconPosition='right'>
                <Collapse.Panel
                  header='Cài đặt mốc đạt'
                  key='1'
                  extra={
                    renderSettingPassMark !== undefined
                      ? `${renderSettingPassMark}%`
                      : null
                  }
                >
                  <Form form={formSettingPassMark} layout='vertical'>
                    <Form.Item label='Mốc đạt (%)'>
                      <InputNumber
                        addonAfter='%'
                        step='1'
                        min={0}
                        max={100}
                        onChange={onChangePassMark}
                      />
                    </Form.Item>
                    <Form.Item label='Thông báo khi đạt'>
                      <Input.TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label='Thông báo khi trượt'>
                      <Input />
                    </Form.Item>
                  </Form>
                </Collapse.Panel>
              </Collapse>
            </Col>
            <Col span={24}>
              <Collapse ghost className='white_bg' expandIconPosition='right'>
                <Collapse.Panel header='Cài đặt chứng chỉ' key='1'>
                  <Checkbox.Group onChange={onChange2}>
                    <Row gutter={[24, 24]}>
                      <Col span={24}>
                        <Checkbox
                          value={CertificatesType.pass_the_test}
                          disabled={renderSettingPassMark === undefined}
                        >
                          Chứng chỉ vượt qua đợt thi
                        </Checkbox>
                        {renderSettingPassMark === undefined ? (
                          <p>
                            Để cài đặt chứng chỉ vượt qua đợt thi. Bạn vui lòng
                            cài đặt mốc đạt
                          </p>
                        ) : null}
                      </Col>
                      <Col span={24}>
                        <Checkbox value={CertificatesType.join_the_test}>
                          Chứng chỉ tham gia đợt thi
                        </Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Collapse.Panel>
              </Collapse>
            </Col>
            <Col span={24}>
              <Collapse ghost className='white_bg' expandIconPosition='right'>
                <Collapse.Panel
                  header='Chống gian lận'
                  key='1'
                  extra={renderExtra(valueAntiCheating).join(', ')}
                >
                  <Checkbox.Group onChange={onChangeAntiCheating}>
                    <Row gutter={[16, 16]}>
                      <Col span={6}>
                        <Checkbox value={AntiCheatingType.prevent_copy}>
                          Chống copy
                        </Checkbox>
                      </Col>
                      <Col span={18}>
                        <Checkbox value={AntiCheatingType.full_screen_mode}>
                          Toàn màn hình
                        </Checkbox>
                      </Col>
                      <Col span={6}>
                        <Checkbox value={AntiCheatingType.prevent_paste}>
                          Chống paste
                        </Checkbox>
                      </Col>
                      <Col span={18}>
                        <Checkbox value={AntiCheatingType.unfocus_on_screen}>
                          Thoát khỏi màn hình
                        </Checkbox>
                      </Col>
                      <Col span={24}>
                        {valueAntiCheating[3].status === true ? (
                          <>
                            {' '}
                            <p>Số lần thoát khỏi màn hình tối đa</p>
                            <InputNumber
                              min={0}
                              defaultValue={3}
                              onChange={onChangeUnfocusLimit}
                            />{' '}
                          </>
                        ) : null}
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Collapse.Panel>
              </Collapse>
            </Col>
            {/* <Col span={24}>
                        <Collapse ghost className='white_bg' expandIconPosition='right' >
                            <Collapse.Panel header="Cài đặt khác" key="1" extra={'Không có'}>
                                <Checkbox.Group onChange={onChange4}>
                                    <Checkbox value="A">Cho phép highlight</Checkbox>
                                </Checkbox.Group>
                            </Collapse.Panel>
                        </Collapse>
                    </Col> */}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default SettingTestCampaigns;
