import { Form, Button, Input } from 'antd';
import { useEffect } from 'react';

//type: add || update
function AddSection({ closeModal, type }) {
  const [form] = Form.useForm();
  useEffect(() => {
    return () => form.resetFields();
  });
  const onFinish = (values) => {};
  return (
    <Form name='test' form={form} layout='vertical' onFinish={onFinish}>
      <Form.Item
        style={{ fontWeight: '500' }}
        name='name'
        label='Tên phần'
        rules={[{ required: true, message: 'Đây là thông tin bắt buộc' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        style={{ fontWeight: '500' }}
        name='descriptions'
        label='Mô tả'
      >
        <Input.TextArea rows={4} maxLength={255} />
      </Form.Item>
      <Form.Item className='form-footer '>
        <Button
          type='default'
          htmlType='button'
          className='btn-gray'
          onClick={closeModal}
        >
          Hủy
        </Button>
        <Button type='primary' htmlType='submit' className='btn-primary'>
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddSection;
