import { Form, Button, TreeSelect, Input } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
const { TreeNode } = TreeSelect
function TestEdit({ closeModal }) {
  const { t } = useTranslation('test')
  const [form] = Form.useForm()
  const [category, setCategory] = useState(undefined)
  const onFinish = (values) => {
    console.log(values)
    form.resetFields()
    closeModal()
  }
  return (
    <Form name="test" form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        style={{ fontWeight: '500' }}
        name="name"
        label={t('test_name', { ns: 'test' })}
        rules={[
          {
            required: true,
            message: `${t('this_is_required_information', { ns: 'test' })}`,
          },
        ]}
      >
        <Input placeholder={t('your_input_here', { ns: 'test' })} />
      </Form.Item>
      <Form.Item
        style={{ fontWeight: '500' }}
        name="category"
        label={t('category', { ns: 'test' })}
        rules={[
          {
            required: true,
            message: `${t('this_is_required_information', { ns: 'test' })}`,
          },
        ]}
      >
        <TreeSelect
          style={{ width: '100%' }}
          value={category}
          dropdownStyle={{ maxHeight: 600, overflow: 'auto' }}
          placeholder={t('choose_an_category', { ns: 'test' })}
          treeDefaultExpandAll
          onChange={(value) => setCategory(value)}
        >
          <TreeNode value="parent 1" title="parent 1" disabled>
            <TreeNode value="parent 1-0" title="parent 1-0"></TreeNode>
            <TreeNode value="parent 1-1" title="parent 1-1"></TreeNode>
          </TreeNode>
        </TreeSelect>
      </Form.Item>
      <Form.Item
        name="description"
        label={t('description', { ns: 'test' })}
        style={{ fontWeight: '500' }}
      >
        <Input.TextArea rows={4} maxLength={100}></Input.TextArea>
      </Form.Item>
      <Form.Item className="form-footer ">
        <Button
          type="default"
          htmlType="button"
          className="btn-gray"
          onClick={closeModal}
        >
          {t('button.cancel', { ns: 'common' })}
        </Button>
        <Button type="primary" htmlType="submit" className="btn-primary">
          {t('button.save', { ns: 'common' })}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default TestEdit
