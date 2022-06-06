import { PlusCircleOutlined } from "@ant-design/icons"
import { Button, Collapse, Input, Modal, Pagination, Tabs } from "antd"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import examGroupsApi from "../../../api/examGroupsApi"
import {
  examSelector,
  fetchExamGroups,
  replaceFilter,
} from "../../../slices/examGroup"
import CustomPanel from "./ExamPanel"
import AddExamGroup from "./Forms/AddExamGroup"
import { useTranslation } from "react-i18next"
const { TabPane } = Tabs
const { Search } = Input

const testCategoryData = [
  {
    id: "1",
    name: "General",
    child: [
      { id: "4", name: "child" },
      { id: "5", name: "test" },
    ],
  },
  {
    id: "2",
    name: "Very long long long long name name",
    child: [
      { id: "6", name: "long test" },
      { id: "7", name: "ádasd" },
    ],
  },
  {
    id: "3",
    name: "IT",
    child: [],
  },
]

function TabExamGroup({ tab, key, ...props }) {
  const { t } = useTranslation("category")
  const [examModal, setExamModal] = useState(false)
  const { exams, filters } = useSelector(examSelector)
  const [pagination, setPagination] = useState({
    page: 1,
    totalRows: 1,
    rowPerPage: 15,
  })

  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      try {
        const data = await dispatch(fetchExamGroups(filters)).unwrap()
        setPagination(data.pagination)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [filters])
  const onChange = () => {}
  const addExamGroup = () => {
    setExamModal(!examModal)
  }
  const onSearch = (values) => {}
  return (
    <TabPane tab={tab} key={key} {...props}>
      <div className="category-group">
        <Search
          placeholder={t("search_category", { ns: "category" })}
          style={{ width: 400 }}
          defaultValue=""
          loading={false}
          onSearch={onSearch}
        />
        <Button
          className="btn-primary"
          type="primary"
          size="large"
          icon={<PlusCircleOutlined />}
          onClick={addExamGroup}
        >
          {t("new_group_category", { ns: "category" })}
        </Button>
      </div>

      <Collapse expandIconPosition="right" ghost onChange={onChange}>
        {testCategoryData.map((exam, index) => (
          <CustomPanel exam={exam} key={index} index={index + 1} />
        ))}
      </Collapse>
      <Modal
        title={t("create_category", { ns: "category" })}
        visible={examModal}
        onOk={() => setExamModal(false)}
        onCancel={() => setExamModal(false)}
        style={{ top: 25 }}
        footer={null}
      >
        <AddExamGroup onCancel={() => setExamModal(false)} />
      </Modal>
    </TabPane>
  )
}

export default TabExamGroup
