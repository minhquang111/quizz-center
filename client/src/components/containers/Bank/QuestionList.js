import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Checkbox, Collapse, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import CustomPanel from './CustomPanel';

const defaultQuestionList = [
  {
    id: 1,
    name: 'asda',
  },
  {
    id: 2,
    name: 'asda1',
  },
  {
    id: 3,
    name: 'asda2',
  },
];
const { confirm } = Modal;
function QuestionList() {
  const [questionList, setQuestionList] = useState(defaultQuestionList);
  const [checkAll, setCheckAll] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const showConfirm = (e, deleteList) => {
    confirm({
      title: 'Thông báo',
      icon: <ExclamationCircleOutlined />,
      content: 'Bạn có muốn xoá các câu hỏi đã chọn',

      onOk() {
        console.log(deleteList);
        e.target.value = 'option';
      },

      onCancel() {
        e.target.value = 'option';
      },
    });
  };
  useEffect(() => {
    setShowOption(
      questionList.findIndex((question) => !!question.checked) !== -1,
    );
    setCheckAll(questionList.findIndex((question) => !question.checked) === -1);
  }, [questionList]);

  const onCheck = (value) => {
    const newQuestionList = questionList.map((question) => {
      if (question.id !== value.id) return question;
      return { ...question, checked: value.checked };
    });
    setQuestionList(newQuestionList);
  };

  const onCheckAllChange = (e) => {
    const newQuestionList = questionList.map((question) => ({
      ...question,
      checked: e.target.checked,
    }));
    setQuestionList(newQuestionList);
    setCheckAll(e.target.checked);
  };
  const handleMassDelete = (e) => {
    if (e.target.value === 'delete') {
      const deleteList = questionList.filter((question) =>
        Boolean(question.checked),
      );
      showConfirm(e, deleteList);
    }
  };
  return (
    <div className='question-list'>
      <Checkbox
        onChange={onCheckAllChange}
        checked={checkAll}
        className='checkAll'
      >
        {checkAll ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}
      </Checkbox>
      {showOption && (
        <select onChange={handleMassDelete} className='check-option'>
          <option value='option'>-- Tuỳ chọn --</option>
          <option value='delete'>Xoá</option>
        </select>
      )}
      <Collapse ghost>
        {questionList.map((question, index) => (
          <CustomPanel
            key={index}
            question={question}
            index={index + 1}
            onCheck={onCheck}
          />
        ))}
      </Collapse>
    </div>
  );
}

export default QuestionList;
