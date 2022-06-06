import { Divider, Modal, Button, Typography } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import MoveExamChild from './Forms/MoveExamChild';
import { useState } from 'react';
import subExamGroupsApi from '../../../api/subExamGroupsApi';
import { useDispatch } from 'react-redux';
import { replaceFilter } from '../../../slices/examGroup';
import { useTranslation } from 'react-i18next'

const { Paragraph } = Typography

function ExamChildItem({ child, exam }) {
  const { t } = useTranslation('category', 'common')
  const dispatch = useDispatch();
  const [moveChildExamModal, setMoveChildExamModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [childName, setChildName] = useState(child.name);
  const onRemove = () => {
    Modal.confirm({
      title: `${t('are_you_sure_delete_sub_category', { ns: 'category' })} ${child.name}`,
      icon: <ExclamationCircleOutlined />,
      okText: t('button.ok', { ns: 'common' }),
      cancelText: t('button.cancel', { ns: 'common' }),
      onOk: onOk,
    })
  }
  const onOk = () => { }
  const onMove = () => {
    setMoveChildExamModal(true)
  }
  const switchEditMode = () => {
    setEditMode(!editMode)
  }
  const onEditEnd = () => {
    //console.log(child.name)
    setEditMode(!editMode)
  }
  const onEnd = () => {
    setEditMode(!editMode)
  }
  return (
    <>
      <Divider />
      <div className="test-item">
        <Paragraph
          editable={{ onChange: setChildName, editing: editMode, onEnd: onEnd }}
          className="header"
        >
          {childName}
        </Paragraph>
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
          <div className='option'>
            <div className='edit' onClick={switchEditMode}>
              {t('button.edit', { ns: 'common' })}
            </div>
            <div className='move' onClick={onMove}>
              {t('button.move', { ns: 'common' })}
            </div>
            <div className='delete' onClick={onRemove}>
              {t('button.delete', { ns: 'common' })}
            </div>
          </div>
        )}
      </div>
      <Modal
        title={t('move_sub_category', { ns: 'category' })}
        visible={moveChildExamModal}
        onOk={() => setMoveChildExamModal(false)}
        onCancel={() => setMoveChildExamModal(false)}
        style={{ top: 25 }}
        footer={null}
      >
        <MoveExamChild
          onCancel={() => setMoveChildExamModal(false)}
          child={child}
        />
      </Modal>
    </>
  )
}

export default ExamChildItem