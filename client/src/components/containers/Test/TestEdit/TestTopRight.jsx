import {
  EditOutlined,
  SettingFilled,
  EllipsisOutlined,
} from '@ant-design/icons';
import { Tooltip, Space, Dropdown, Modal } from 'antd';
import { useState } from 'react';
import OptionMenu from './Menu/OptionMenu';
import TestSetting from './Forms/TestSetting';
import TestEdit from './Forms/TestEdit';
import { useTranslation } from 'react-i18next';
function TestTopRight() {
  const { t } = useTranslation('test');
  const [optionMenu, setOptionMenu] = useState(false);
  const [setting, setSetting] = useState(false);
  const [editing, setEditting] = useState(false);
  return (
    <Space size="large">
      <Tooltip title={t('update_test_infomation', { ns: 'test' })}>
        <EditOutlined
          style={{ fontSize: '16px' }}
          onClick={() => setEditting(true)}
        />
      </Tooltip>
      <Tooltip title={t('test_setting', { ns: 'test' })}>
        <SettingFilled
          style={{ fontSize: '16px' }}
          onClick={() => setSetting(true)}
        />
      </Tooltip>
      <Dropdown
        visible={optionMenu}
        overlay={<OptionMenu close={() => setOptionMenu(false)} />}
        trigger={['click']}
        placement="topRight"
      >
        <EllipsisOutlined
          style={{ fontSize: '16px' }}
          onClick={() => setOptionMenu(true)}
        />
      </Dropdown>
      <Modal
        title={t('test_setting', { ns: 'test' })}
        onCancel={() => setSetting(false)}
        visible={setting}
        style={{ top: 25 }}
        footer={null}
      >
        <TestSetting closeModal={() => setSetting(false)} />
      </Modal>
      <Modal
        title={t('update_test_infomation', { ns: 'test' })}
        onCancel={() => setEditting(false)}
        visible={editing}
        style={{ top: 25 }}
        footer={null}
      >
        <TestEdit closeModal={() => setEditting(false)} />
      </Modal>
    </Space>
  );
}

export default TestTopRight;
