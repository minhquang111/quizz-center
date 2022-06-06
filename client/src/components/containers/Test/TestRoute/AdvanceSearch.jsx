import { useRef, useState } from 'react'
import { TreeSelect, Select, Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import ClickOutside from '../../../../utils/ClickOutside'
import { useTranslation } from 'react-i18next'
const { TreeNode } = TreeSelect

const treeData = [
  {
    title: 'Đề thường',
    value: 'normal',
  },
  {
    title: 'Đề IT',
    value: 'IT',
  },
  {
    title: 'Đề MI',
    value: 'MI',
  },
  {
    title: 'Đề MBTI',
    value: 'MBTI',
  },
  {
    title: 'Đề Toeic',
    value: 'toeic',
  },
  {
    title: 'Đề disc',
    value: 'disc',
  },
]

function AdvanceSearch({ closeAdvanceSearch }) {
  const { t } = useTranslation('test')
  const categoryRef = useRef()
  const sortRef = useRef()
  const listRef = useRef()
  const [category, setCategory] = useState(undefined)
  const [sort, setSort] = useState('recently')
  const [list, setList] = useState(treeData)
  const onChangeCategory = (value) => {
    setCategory(value)
  }
  const onChangeSort = (value) => {
    setSort(value)
  }
  const onChangeList = (value) => {
    setList(value)
  }
  const onClick = () => {
    closeAdvanceSearch()
    console.log(category, sort, list)
  }
  return (
    <ClickOutside
      closeAdvance={closeAdvanceSearch}
      categoryRef={categoryRef}
      sortRef={sortRef}
      listRef={listRef}
    >
      <div className="custom-menu test-section">
        <div className="custom-menu-heading">
          {t('add_filter_options', { ns: 'test' })}
        </div>
        <div className="custom-menu-body">
          <TreeSelect
            style={{ width: '100%' }}
            value={category}
            dropdownStyle={{ maxHeight: 600, overflow: 'auto' }}
            placeholder={t('all_categories', { ns: 'test' })}
            treeDefaultExpandAll
            onChange={onChangeCategory}
            onClick={(e) => (categoryRef.current = e.target)}
          >
            <TreeNode value="parent 1" title="parent 1" selectable={false}>
              <TreeNode value="parent 1-0" title="parent 1-0"></TreeNode>
              <TreeNode value="parent 1-1" title="parent 1-1"></TreeNode>
            </TreeNode>
          </TreeSelect>
          <Select
            placeholder={t('recently_added', { ns: 'test' })}
            defaultValue={sort}
            onChange={onChangeSort}
            onClick={(e) => (sortRef.current = e.target)}
          >
            <Select.Option value="recently">
              {t('recently_added', { ns: 'test' })}
            </Select.Option>
            <Select.Option value="ascending">
              {t('alphabet', { ns: 'test' })}
            </Select.Option>
          </Select>
          <TreeSelect
            showSearch
            style={{ width: '100%' }}
            value={list}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            multiple
            treeData={treeData}
            treeDefaultExpandAll
            onChange={onChangeList}
            onClick={(e) => (listRef.current = e.target)}
          ></TreeSelect>
        </div>
        <div className="custom-menu-footer">
          <Button onClick={onClick} className="btn-primary">
            {t('search', { ns: 'test' })}
          </Button>
        </div>
        <div className="custom-menu-close" onClick={closeAdvanceSearch}>
          <CloseOutlined />
        </div>
      </div>
    </ClickOutside>
  )
}

export default AdvanceSearch
