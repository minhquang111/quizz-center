import {
  CaretDownOutlined,
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Checkbox, Collapse, Divider, Modal, Tooltip } from 'antd';
import QuestionDetail from './QuestionDetail';

const { Panel } = Collapse;

function CustomPanel({ index, question, onCheck, ...props }) {
  const onDelete = (e) => {
    e.stopPropagation();
    Modal.confirm({
      title: `Bạn Có Muốn Xóa ${question.name}`,
      icon: <ExclamationCircleOutlined />,
      okText: 'Đồng ý',
      cancelText: 'Hủy',
      onOk: onOk,
    });
  };
  const onOk = () => {};
  const onEdit = (e) => {
    e.stopPropagation();
  };
  const onCopy = (e) => {
    e.stopPropagation();
  };

  const handleOnCheck = (e) => {
    e.stopPropagation();
    if (e.target.value) {
      onCheck({
        id: parseInt(e.target.value),
        checked: e.target.checked,
      });
    }
  };
  return (
    <Panel
      showArrow={false}
      key={index}
      {...props}
      extra={[
        <Tooltip key={index + 3000} title='Sửa'>
          <EditOutlined onClick={onEdit} />
        </Tooltip>,
        <Tooltip key={index + 2000} title='Nhân bản'>
          <CopyOutlined onClick={onCopy} />
        </Tooltip>,
        <Tooltip key={index + 1000} title='Xóa'>
          <DeleteOutlined onClick={onDelete} />
        </Tooltip>,
        <CaretDownOutlined key={index + 4000} />,
      ]}
      header={
        <div onClick={handleOnCheck} className='panel--header'>
          <Checkbox value={question.id} checked={Boolean(question.checked)}>
            <span className='question--number'>{`Câu hỏi ${index}`}</span>{' '}
            <Divider type='vertical' />
            {question.name}
          </Checkbox>
        </div>
      }
    >
      <QuestionDetail question={question} />
    </Panel>
  );
}
export default CustomPanel;
