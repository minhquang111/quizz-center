import {
  Input,
  Collapse,
  Button,
  Modal,
  Tag,
  Dropdown,
  Row,
  Col,
  Typography,
} from 'antd';
import { PlusCircleOutlined, CloseCircleFilled } from '@ant-design/icons';
import AddTest from './Forms/AddTest';
import { useState } from 'react';
import TestPanel from './TestPanel';
import AdvanceSearch from './AdvanceSearch';
import { useTranslation } from 'react-i18next';
const { Search } = Input;

function Tests() {
  const { t } = useTranslation('test');
  const [addTestModal, setAddTestModal] = useState(false);
  const [showAdvanceSearch, setShowAdvanceSearch] = useState(false);
  const addTest = () => {
    setAddTestModal(true);
  };
  const onSearch = (values) => { };
  const advanceSearch = () => {
    setShowAdvanceSearch(true);
  };

  return (
    <div className="container test-section tab-style">
      <Row justify="space-between" align="center">
        <Col>
          <Typography.Title level={3}>
            {t('tests', { ns: 'test' })}
          </Typography.Title>
        </Col>
        <Col>
          <Button
            className='btn-primary'
            type='primary'
            size='large'
            icon={<PlusCircleOutlined />}
            onClick={addTest}
          >
            {t('create_new_test', { ns: 'test' })}
          </Button>
        </Col>
      </Row>
      <Row
        gutter={24}
        align="middle"
        justify="start"
        style={{ justifyContent: 'flex-start', marginBottom: 12 }}
      >
        <Col
          md={10}
          xs={12}
          className="category-group"
          style={{ marginBottom: 0 }}
        >
          <Search
            placeholder={t('enter_keyword_to_search_tests', { ns: 'test' })}
            defaultValue=""
            loading={false}
            onSearch={onSearch}
          />
        </Col>
        <Col md={4} xs={12}>
          <Dropdown
            visible={showAdvanceSearch}
            overlay={
              <AdvanceSearch
                closeAdvanceSearch={() => setShowAdvanceSearch(false)}
              />
            }
            trigger={['click']}
          >
            <Button
              className='btn-outline-primary'
              type='primary'
              size='large'
              onClick={advanceSearch}
            >
              {t('advanced_filters', { ns: 'test' })}
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <div>
        {tags.map((tag, index) => (
          <Tag closable key={index} closeIcon={<CloseCircleFilled />}>
            {tag.name}
          </Tag>
        ))}
        <Tag onClick={advanceSearch} className="tag-btn">
          {t('category_all_categories', { ns: 'test' })}
        </Tag>
        <Tag onClick={advanceSearch} className="tag-btn">
          {t('sort_added_recently', { ns: 'test' })}
        </Tag>
      </div>
      <Collapse expandIconPosition="right" ghost>
        {tests.map((test, index) => (
          <TestPanel test={test} key={index} index={index} />
        ))}
      </Collapse>
      <Modal
        title={t('create_new_test', { ns: 'test' })}
        onOk={() => setAddTestModal(false)}
        onCancel={() => setAddTestModal(false)}
        visible={addTestModal}
        style={{ top: 25 }}
        footer={null}
      >
        <AddTest closeModal={() => setAddTestModal(false)} />
      </Modal>
    </div>
  );
}

export default Tests;

const tags = [
  {
    name: 'Đề thường',
  },
  {
    name: 'Đề IT',
  },
  {
    name: 'Đề Toeic',
  },
  {
    name: 'Đề MBIT',
  },
  {
    name: 'Đề thường',
  },
  {
    name: 'Đề MI',
  },
];
const tests = [
  {
    name: 'test1',
    createAt: '16/05/2022',
    examinationsCount: 1,
    totalquestion: 4,
    totalScore: 4,
    questionGroup: 'question1',
    exams: [
      {
        name: 'exam1',
        link: 'http://localhost:3000/tests',
      },
    ],
  },
  {
    name: 'test2',
    createAt: '17/04/2022',
    examinationsCount: 0,
    totalquestion: 3,
    totalScore: 6,
    questionGroup: 'question1',
    exams: [],
  },
  {
    name: 'test3',
    createAt: '17/02/2022',
    examinationsCount: 4,
    totalquestion: 1,
    totalScore: 2,
    questionGroup: 'question2',
    exams: [
      {
        name: 'exam1',
        link: 'http://localhost:3000/tests',
      },
      {
        name: 'exam2',
        link: 'http://localhost:3000/tests',
      },
      {
        name: 'exam3',
        link: 'http://localhost:3000/tests',
      },
      {
        name: 'exam4',
        link: 'http://localhost:3000/tests',
      },
    ],
  },
];
