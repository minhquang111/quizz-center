import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Row,
  Col,
  Collapse,
  Dropdown,
  Typography,
  Tooltip,
  Divider,
  Checkbox,
  Modal,
  Select,
} from "antd"
import {
  PlusCircleOutlined,
  DownOutlined,
  ExclamationCircleOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons"
import AddMenu from "../Menu/AddMenu"
import AddRandomQuestion from "../Forms/AddRandomQuestion"
import QuestionItem from "./QuestionItem"
import AddSection from "../Forms/AddSection"
import { useTranslation } from "react-i18next"

function Section({ provided, section }) {
  const [randomQues, setRandomQues] = useState(false)
  const { t } = useTranslation("test", "common")
  const navigate = useNavigate()
  const [checkAll, setCheckAll] = useState(false)
  const [checkOption, setCheckOption] = useState("none")
  const [sectionModal, setSectionModal] = useState(false)
  const [addQuesDropDown, setAddQuesDropDown] = useState(false)

  const onCheck = (e) => {
    setCheckAll(e.target.checked)
  }
  const onEdit = (e) => {
    e.stopPropagation()
    setSectionModal(true)
  }
  const onDeleteSection = (e) => {
    e.stopPropagation()
    Modal.confirm({
      title: `${t("do_you_want_to_remove_section", { ns: "test" })}`,
      icon: <ExclamationCircleOutlined />,
      okText: `${t("Ok", { ns: "test" })}`,
      cancelText: `${t("Cancel", { ns: "test" })}`,
      onOk: onOkDeleteSection,
    })
  }
  const onSelect = (e) => {
    if (e === "remove") {
      setCheckOption("remove")
      Modal.confirm({
        title: `${t("do_you_want_to_remove_selected_question", {
          ns: "test",
        })}`,
        icon: <ExclamationCircleOutlined />,
        okText: `${t("Ok", { ns: "test" })}`,
        cancelText: `${t("Cancel", { ns: "test" })}`,
        onOk: onOkDeleteSelect,
        afterClose: () => {
          setCheckOption("none")
          Modal.destroyAll()
        },
      })
    }
  }
  const HandleAddQuestion = (e) => {
    e.stopPropagation()
    navigate("/question")
  }
  const onOkDeleteSelect = (e) => {
    setCheckOption("none")
    Modal.destroyAll()
  }
  const onOkDeleteSection = () => {}
  const handleClickDropDown = (e) => {
    e.stopPropagation()
    setAddQuesDropDown(!addQuesDropDown)
  }
  return (
    <>
      <Collapse expandIconPosition="right" ghost>
        <Collapse.Panel
          extra={[
            <Dropdown.Button
              key={+1}
              overlay={
                <AddMenu
                  addRandomQues={() => setRandomQues(true)}
                  closeDropDown={() => setAddQuesDropDown(false)}
                />
              }
              icon={<DownOutlined onClick={handleClickDropDown} />}
              trigger={["click"]}
              className="btn-primary"
              type="primary"
              size="large"
              visible={addQuesDropDown}
              onClick={HandleAddQuestion}
            >
              <PlusCircleOutlined />
              <Typography.Text style={{ color: "#fff" }}>
                {t("add_question", { ns: "test" })}
              </Typography.Text>
            </Dropdown.Button>,
            <Divider
              key={+2}
              type="vertical"
              style={{ height: 36, margin: "0 12px" }}
            />,
            <Tooltip title={t("Edit", { ns: "test" })} key={+3}>
              <EditOutlined onClick={onEdit} />
            </Tooltip>,
            <Tooltip title={t("remove", { ns: "test" })} key={+4}>
              <DeleteOutlined onClick={onDeleteSection} />
            </Tooltip>,
          ]}
          header={<Typography.Title level={2}>{section.name}</Typography.Title>}
        >
          {section.questions?.length > 0 && (
            <Row>
              <Checkbox
                style={{ margin: "0 0px 16px 18px" }}
                onChange={onCheck}
                checked={checkAll}
              >
                <Typography.Title level={5}>
                  {t("check_all", { ns: "test" })}
                </Typography.Title>
              </Checkbox>
              {checkAll ? (
                <Col>
                  <Select
                    style={{ width: 120 }}
                    onChange={onSelect}
                    value={checkOption}
                  >
                    <Select.Option value="none">
                      {t("select", { ns: "test" })}
                    </Select.Option>
                    <Select.Option value="remove">
                      {t("remove", { ns: "test" })}
                    </Select.Option>
                  </Select>
                </Col>
              ) : null}
            </Row>
          )}
          {section.questions.map((question, que_idx) => (
            <div key={question._id} draggableId={question._id} index={que_idx}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  style={{
                    userSelect: "none",
                    margin: "0 0 6px 0",
                    ...provided.draggableProps.style,
                  }}
                >
                  <Divider />
                  <Row>
                    <Col span={24}>
                      <QuestionItem
                        question={question}
                        index={que_idx}
                        checkAll={checkAll}
                      />
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          ))}
          {provided.placeholder}
          {randomQues ? (
            <AddRandomQuestion rmvRandomQues={() => setRandomQues(false)} />
          ) : null}
        </Collapse.Panel>
      </Collapse>
      <Modal
        title={t("update_section_modal_title", { ns: "test" })}
        visible={sectionModal}
        onCancel={() => setSectionModal(false)}
        style={{ top: 25 }}
        footer={null}
      >
        <AddSection closeModal={() => setSectionModal(false)} type="modify" />
      </Modal>
    </>
  )
}

export default Section
