import { CalendarOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Row, Space, Avatar, Card } from 'antd'
import React from 'react'
import Dot from '../../commons/Dot'
import CardTest from './CardTest/CardTest'
import Chart from './Chart'
import Results from './Results/Results'
import { useTranslation } from 'react-i18next'

function Dashboard(props) {
  const { t } = useTranslation('dashboard', 'common')

  return (
    <div className="dashboard ">
      <Row gutter={[24, 24]}>
        <Col span={24} className="card_test">
          <CardTest />
        </Col>

        <Col span={24}>
          <Card size="small" className="card_profile">
            <Row gutter={[16, 16]} align="middle">
              <Col lg={9} md={{ span: 24 }} xs={24}>
                <Card.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Hoang Duc Nam"
                  description="nam17081999@gmail.com"
                />
              </Col>
              <Col lg={5} md={8} xs={24}>
                <div className="info_profile">
                  <p>{t('customer_code', { ns: 'dashboard' })}</p>
                  <b>10465.10346</b>
                </div>
              </Col>
              <Col lg={5} md={8} xs={24}>
                <div className="info_profile">
                  <p>{t('test_credit', { ns: 'dashboard' })}</p>
                  <b>10</b>
                </div>
              </Col>
              <Col lg={5} md={8} xs={24}>
                <div className="info_profile">
                  <p>{t('test_credit', { ns: 'dashboard' })}</p>
                  <b>10</b>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} className="mgt_24">
        <Col lg={14} md={14} xs={24}>
          <Results />
        </Col>

        <Col lg={10} md={10} xs={24}>
          <div className="white_bg">
            <div className="pd_20">
              <p className="font_weight_bold">
                {t('the_latest_test_campaigns', { ns: 'dashboard' })}
              </p>
              <Row gutter={[16, 16]} className="mgt_24">
                <Col span={2}>
                  <Dot />
                </Col>
                <Col span={16}>
                  <p>https://e.testcenter.vn/t/sdfdsf...</p>
                  <p>
                    <CalendarOutlined />
                    {t('unlimited_time', { ns: 'dashboard' })}
                  </p>
                </Col>
                <Col span={6}>
                  <Button type="primary">
                    {t('button.result', { ns: 'common' })}
                  </Button>
                </Col>

                <Col span={2}>
                  <Dot />
                </Col>
                <Col span={16}>
                  <p>https://e.testcenter.vn/t/sdfdsf...</p>
                  <p>
                    <CalendarOutlined />{' '}
                    {t('unlimited_time', { ns: 'dashboard' })}
                  </p>
                </Col>
                <Col span={6}>
                  <Button type="primary">
                    {t('button.result', { ns: 'common' })}
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </Col>

        <Col lg={12} md={12} xs={24}>
          <Chart />
        </Col>

        <Col lg={12} md={12} xs={24}>
          <div className="white_bg pd_20 insert_test">
            <Space direction="vertical">
              <DatePicker.RangePicker size="small" />
            </Space>
            <table>
              <tbody>
                <tr>
                  <th>{t('order', { ns: 'dashboard' })}</th>
                  <th>{t('exam_name', { ns: 'dashboard' })}</th>
                  <th>{t('number_of_exams', { ns: 'dashboard' })}</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>test 2</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>test 2</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
