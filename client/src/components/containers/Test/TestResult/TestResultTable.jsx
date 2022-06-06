import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Badge, Table, Button, Space, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const { Column } = Table;
function TestResultTable({ data }) {
  const { t } = useTranslation('test', 'common');
  const onDelete = () => {
    Modal.confirm({
      title: `${t('Do_you_want_to_remove_the_result?', { ns: 'test' })}`,
      icon: <ExclamationCircleOutlined />,
      okText: `${t('button.ok', { ns: 'common' })}`,
      cancelText: `${t('button.cancel', { ns: 'common' })}`,
      onOk: onDeleteOK,
    });
  };
  const onDeleteOK = () => { };
  return (
    <Table dataSource={data}>
      <Column
        title={t('INFORMATION_CONTESTANTS', { ns: 'test' })}
        dataIndex="name"
        key="name"
      />
      <Column
        title={t('COMPLETE_PERCENT', { ns: 'test' })}
        dataIndex="finishPercent"
        key="finishPercent"
        render={(text, record) => (
          <Space size="middle">
            <p>{record.finishPercent}</p>
            <progress value={record.finishPercent} max={100} />
          </Space>
        )}
      />
      <Column
        title={t('RESULT', { ns: 'test' })}
        dataIndex="score"
        key="score"
      />
      <Column
        title={t('DURATION', { ns: 'test' })}
        dataIndex="duration"
        key="duration"
      />
      <Column
        title={t('CREATED_AT', { ns: 'test' })}
        dataIndex="createdAt"
        key="createdAt"
      />
      <Column
        title=""
        dataIndex="result"
        key="result"
        render={(text, record) => (
          <Space size="middle">
            <Badge
              count={record.result ? record.result : '----'}
              style={{
                backgroundColor: `${record.result === 'đạt' ? 'green' : 'purple'
                  }`,
              }}
            ></Badge>
          </Space>
        )}
      />
      <Column
        title={t('ACTION', { ns: 'test' })}
        dataIndex="result"
        key="result"
        render={(text, record) => (
          <Space size="middle">
            <Link to="/results/12" className="btn-link">
              {t('View_Detail', { ns: 'test' })}
            </Link>
            <Button
              icon={<DeleteOutlined />}
              type="text"
              onClick={onDelete}
            ></Button>
          </Space>
        )}
      />
    </Table>
  );
}

export default TestResultTable;
