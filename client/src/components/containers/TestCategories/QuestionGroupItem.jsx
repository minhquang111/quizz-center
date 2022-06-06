import { useState } from 'react';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Tooltip, Typography, Button, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
const { Paragraph } = Typography;

function QuestionItem({ question }) {
  const { t } = useTranslation('category', 'common');
  const [questionName, setQuestionName] = useState(question.name);
  const [editMode, setEditMode] = useState(false);
  const onRemove = () => {
    Modal.confirm({
      title: `${t('are_you_sure_delete_question_group', { ns: 'category' })} ${question.name
        }`,
      icon: <ExclamationCircleOutlined />,
      okText: t('button.ok', { ns: 'common' }),
      cancelText: t('button.cancel', { ns: 'common' }),
      onOk: onOk,
    });
  };
  const onOk = () => { };
  const onEnd = () => {
    setEditMode(!editMode);
  };
  const switchEditMode = () => {
    setEditMode(!editMode);
  };
  const onEditEnd = () => {
    setEditMode(!editMode);
  };
  return (
    <div className='question'>
      <div className='question-item'>
        <div className='question-item-header'>
          <Paragraph
            editable={{
              editing: editMode,
              onChange: setQuestionName,
              onEnd: onEnd,
            }}
          >
            {questionName}
          </Paragraph>
        </div>
        {editMode ? (
          <div className='edit-mode'>
            <Button className='btn-gray' onClick={switchEditMode}>
              {t('button.cancel', { ns: 'common' })}
            </Button>
            <Button className='btn-primary' onClick={onEditEnd}>
              {t('button.update', { ns: 'common' })}
            </Button>
          </div>
        ) : (
          <div className='question-item-option'>
            <Tooltip title={t('button.update', { ns: 'common' })}>
              <EditOutlined onClick={switchEditMode} />
            </Tooltip>
            <Tooltip title={t('button.delete', { ns: 'common' })}>
              <DeleteOutlined onClick={onRemove} />
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionItem;