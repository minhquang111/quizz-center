import { useState } from 'react';
import { Tabs, Input, Button, Modal } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import QuestionItem from './QuestionGroupItem';
import AddQuestionGroup from './Forms/AddQuestionGroup';
import { useTranslation } from 'react-i18next'
const { TabPane } = Tabs;
const { Search } = Input;
const questionData = [
  {
    id: '1',
    name: 'new',
  },
  {
    id: '2',
    name: 'Very long long long long name name',
  },
  {
    id: '3',
    name: 'IT',
  },
];
function TabQuestionGroup({ tab, key, ...props }) {
  const { t } = useTranslation('category');
  const [questionModal, setQuestionModal] = useState(false);
  const addQuestionGroup = () => {
    setQuestionModal(!questionModal);
  };
  const onSearch = (values) => { };
  return (
    <TabPane tab={tab} key={key} {...props}>
      <div className="category-group">
        <Search
          placeholder={t('search_question_group', { ns: 'category' })}
          style={{ width: 400 }}
          defaultValue=""
          loading={false}
          onSearch={onSearch}
        />
        <Button
          className='btn-primary'
          type='primary'
          size='large'
          icon={<PlusCircleOutlined />}
          onClick={addQuestionGroup}
        >
          {t('new_questiongroup', { ns: 'category' })}
        </Button>
      </div>

      {questionData.map((question, index) => (
        <QuestionItem question={question} key={index} />
      ))}
      <Modal
        title={t('create_new_question_group', { ns: 'category' })}
        onOk={() => setQuestionModal(false)}
        onCancel={() => setQuestionModal(false)}
        visible={questionModal}
        style={{ top: 25 }}
        footer={null}
      >
        <AddQuestionGroup onCancel={() => setQuestionModal(false)} />
      </Modal>
    </TabPane>
  );
}

export default TabQuestionGroup;