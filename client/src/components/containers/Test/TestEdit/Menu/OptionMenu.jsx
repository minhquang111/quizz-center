import { Menu, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import ClickOutside from '../../../../../utils/ClickOutside';
import { useTranslation } from 'react-i18next';

function OptionMenu({ close }) {
  const { t } = useTranslation('test', 'common');
  const onCopyOk = () => { };
  const onPrint = () => { };
  const onExport = () => { };
  const onRemoveOk = () => { };
  const modalCopyConfirm = () => {
    close();
    Modal.confirm({
      title: `${t('do_you_want_to_duplicate_this_test', { ns: 'test' })}`,
      icon: <ExclamationCircleOutlined />,
      okText: `${t('button.yes', { ns: 'common' })}`,
      cancelText: `${t('button.cancel', { ns: 'common' })}`,
      onOk: onCopyOk,
    });
  };
  const modalRemoveConfirm = () => {
    close();
    Modal.confirm({
      title: `${t('do_you_want_to_remove_test', { ns: 'test' })}`,
      icon: <ExclamationCircleOutlined />,
      okText: `${t('button.yes', { ns: 'common' })}`,
      cancelText: `${t('button.cancel', { ns: 'common' })}`,
      onOk: onRemoveOk,
    });
  };
  return (
    <ClickOutside closeOption={close}>
      <Menu>
        <Menu.Item key={1} style={{ marginTop: 0, marginBottom: 0 }}>
          <div onClick={modalCopyConfirm}>
            {t('button.duplicate', { ns: 'common' })}
          </div>
        </Menu.Item>
        <Menu.Item key={2} style={{ marginTop: 0, marginBottom: 0 }}>
          <div onClick={onPrint}>{t('button.print', { ns: 'common' })}</div>
        </Menu.Item>
        <Menu.Item key={3} style={{ marginTop: 0, marginBottom: 0 }}>
          <div onClick={onExport}>
            {t('button.export_excel', { ns: 'common' })}
          </div>
        </Menu.Item>
        <Menu.Item key={4} style={{ marginTop: 0, marginBottom: 0 }}>
          <div onClick={modalRemoveConfirm} style={{ color: 'red' }}>
            {t('button.delete', { ns: 'common' })}
          </div>
        </Menu.Item>
      </Menu>
    </ClickOutside>
  );
}

export default OptionMenu;
