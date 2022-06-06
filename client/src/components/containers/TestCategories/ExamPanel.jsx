import { Collapse, Tooltip, Button, Modal } from "antd"
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons"
import { PlusCircleOutlined } from "@ant-design/icons"
import { useState } from "react"
import { useDispatch } from "react-redux"
import examGroupsApi from "../../../api/examGroupsApi"
import subExamGroupsApi from "../../../api/subExamGroupsApi"
import { replaceFilter } from "../../../slices/examGroup"
import ExamChildItem from "./ExamChildItem"
import AddExamChild from "./Forms/AddExamChild"
import EditExamGroup from "./Forms/EditExamGroup"
import { useTranslation } from "react-i18next"
const { Panel } = Collapse

function CustomPanel({ index, exam, ...props }) {
  const { t } = useTranslation("category", "common")
  const [editExamGroup, setEditExamGroup] = useState(false)
  const [addChildExamModal, setAddChildExamModal] = useState(false)

  const dispatch = useDispatch()
  const onDelete = (e) => {
    e.stopPropagation()
    Modal.confirm({
      title: `${t("are_you_sure_delete_category", { ns: "category" })} ${
        exam.name
      }`,
      icon: <ExclamationCircleOutlined />,
      okText: t("button.ok", { ns: "common" }),
      cancelText: t("button.cancel", { ns: "common" }),
      onOk: onOk,
    })
  }
  const onOk = () => {}
  const onEdit = (e) => {
    e.stopPropagation()
    setEditExamGroup(true)
  }
  return (
    <>
      <Panel
        key={index}
        {...props}
        extra={[
          <Tooltip
            key={index + 2000}
            title={t("button.edit", { ns: "common" })}
          >
            <EditOutlined onClick={onEdit} />
          </Tooltip>,
          <Tooltip
            key={index + 1000}
            title={t("button.delete", { ns: "common" })}
          >
            <DeleteOutlined onClick={onDelete} />
          </Tooltip>,
        ]}
        header={
          <div className="pannel-header">
            <h4 className="header">{exam.name}</h4>
            <p className="child">
              {exam.child.map((child, index) => (
                <span key={index + 200}>
                  {child.name}
                  {index + 1 === exam.child.length ? "" : ", "}
                </span>
              ))}
            </p>
          </div>
        }
      >
        {exam.child.map((child, index) => (
          <ExamChildItem child={child} key={index} />
        ))}
        <Button
          icon={<PlusCircleOutlined />}
          type="primary"
          className="btn-primary-inverse"
          onClick={() => setAddChildExamModal(true)}
        >
          {t("new_sub_category2", { ns: "category" })}
        </Button>
      </Panel>
      <Modal
        visible={addChildExamModal}
        onOk={() => setAddChildExamModal(false)}
        onCancel={() => setAddChildExamModal(false)}
        title={t("new_sub_category1", { ns: "category" })}
        style={{ top: 25 }}
        footer={null}
      >
        <AddExamChild onCancel={() => setAddChildExamModal(false)} />
      </Modal>
      <Modal
        title={t("update_category2", { ns: "category" })}
        visible={editExamGroup}
        onOk={() => setEditExamGroup(false)}
        onCancel={() => setEditExamGroup(false)}
        style={{ top: 25 }}
        footer={null}
      >
        <EditExamGroup onCancel={() => setEditExamGroup(false)} />
      </Modal>
    </>
  )
}
export default CustomPanel
