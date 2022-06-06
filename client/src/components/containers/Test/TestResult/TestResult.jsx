import { useState } from 'react';
import {
  Breadcrumb,
  Input,
  Select,
  Button,
  Row,
  Col,
  Typography,
  Tooltip,
  Space,
  Modal,
} from 'antd';
import { Link } from 'react-router-dom';
import { DownloadOutlined, MailOutlined } from '@ant-design/icons';
import TestResultTable from './TestResultTable';
import SendMail from './Forms/SendMail';
import { useTranslation } from 'react-i18next';
const data = [
  {
    key: '1',
    name: 'John Brown',
    finishPercent: 50,
    score: 3,
    duration: '12:02:01',
    createdAt: '10:24:51 12/05/2022',
    result: 'đạt',
  },
  {
    key: '2',
    name: 'Jim Green',
    finishPercent: 32,
    score: 1,
    duration: '1:02:01',
    createdAt: '12:24:51 12/05/2022',
    result: 'trượt',
  },
  {
    key: '3',
    name: 'Joe Black',
    finishPercent: 95,
    score: 65,
    duration: '22:02:01',
    createdAt: '12:24:51 13/05/2022',
    result: 'đạt',
  },
];
const { Search } = Input;
function TestResult() {
  const { t } = useTranslation('test');
  const [mailModal, setMailModal] = useState(false);
  const onSearch = (value) => { };
  const onSelectChange = (value) => { };
  const onSendMail = () => {
    setMailModal(true);
  };
  return (
    <div className="container tab-style test-result">
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/tests">{t('tests', { ns: 'test' })}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/tests/12/edit">Test Name</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {t('test_result', { ns: 'test' })}
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={24}>
          <Row gutter={[24, 24]} align="middle" justify="space-between">
            <Col md={8}>
              <Typography.Title level={4}>Test Name</Typography.Title>
            </Col>
            <Col md={16}>
              <Row gutter={8} align="middle" justify="end">
                <Select
                  placeholder={t('latest', { ns: 'test' })}
                  defaultValue="newest"
                  onChange={onSelectChange}
                >
                  <Select.Option value="newest">
                    {t('latest', { ns: 'test' })}
                  </Select.Option>
                  <Select.Option value="highestScore">
                    {t('highest_score', { ns: 'test' })}
                  </Select.Option>
                  <Select.Option value="LowestScore">
                    {t('lowest_score', { ns: 'test' })}
                  </Select.Option>
                </Select>
                <Col className="category-group" style={{ marginBottom: 0 }}>
                  <Search
                    onSearch={onSearch}
                    style={{ width: 350 }}
                    defaultValue=""
                    loading={false}
                    placeholder={t('search_the_answer_sheet', { ns: 'test' })}
                  />
                </Col>
                <Col>
                  <Space>
                    <Button
                      onClick={onSendMail}
                      icon={
                        <Tooltip
                          title={t('send_results_by_email', { ns: 'test' })}
                        >
                          <MailOutlined />
                        </Tooltip>
                      }
                      type="primary"
                      className="btn-primary"
                      size="large"
                    />
                    <Button
                      icon={
                        <Tooltip title={t('export_file', { ns: 'test' })}>
                          <DownloadOutlined />
                        </Tooltip>
                      }
                      type="primary"
                      className="btn-primary"
                      size="large"
                    />
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <TestResultTable data={data} />
        </Col>
      </Row>
      <Modal
        title={t('send_results_by_email', { ns: 'test' })}
        visible={mailModal}
        onCancel={() => setMailModal(false)}
        style={{ top: 25 }}
        footer={null}
      >
        <SendMail closeModal={() => setMailModal(false)} />
      </Modal>
    </div>
  );
}

export default TestResult;
