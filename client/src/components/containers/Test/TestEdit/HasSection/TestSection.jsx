import { Row, Col, Button, Modal } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"
import {
  QuestionCircleOutlined,
  TrophyOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  ForkOutlined,
  FileDoneOutlined,
  PlusCircleOutlined,
  OrderedListOutlined,
} from "@ant-design/icons"
import AddSection from "../Forms/AddSection"
import { useTranslation } from "react-i18next"
import Section from "./Section"
function TestSection({ data }) {
  const { t } = useTranslation("test", "common")
  const [sections, setSections] = useState(data.Sections)
  const [sectionModal, setSectionModal] = useState(false)

  const handleClick = () => {
    setSectionModal(true)
  }

  const onDragEnd = (result) => {
    if (!result.destination) return
    const { source, destination } = result
    if (source.droppableId !== destination.droppableId) {
      const sourceId = sections.filter(
        (section) => section.id === Number(source.droppableId)
      )
      const destId = sections.filter(
        (section) => section.id === Number(destination.droppableId)
      )
      const questionsSource = Array.from(sourceId[0].questions)
      const questionsDest = Array.from(destId[0].questions)
      const remove = questionsSource.splice(source.index, 1)[0]
      questionsDest.splice(destination.index, 0, remove)
      const newSections = sections.map((item) => {
        if (item.id === Number(source.droppableId)) {
          item.questions = questionsSource
          return item
        }
        if (item.id === Number(destination.droppableId)) {
          item.questions = questionsDest
          return item
        }
        return item
      })
      setSections(newSections)
    } else {
      const sourceId = sections.filter(
        (section) => section.id === Number(source.droppableId)
      )
      const questions = Array.from(sourceId[0].questions)
      const remove = questions.splice(source.index, 1)[0]
      questions.splice(destination.index, 0, remove)
      const newSections = sections.map((item) => {
        if (item.id === Number(source.droppableId)) {
          item.questions = questions
          return item
        }
        return item
      })
      setSections(newSections)
    }
  }
  return (
    <>
      <Col span={24}>
        <Row gutter={[0, 24]} align="middle" justify="space-between">
          <Col span={20}>
            <Row gutter={8}>
              <Col>
                <OrderedListOutlined style={{ marginRight: 4 }} />
                <span>
                  {data.Sections.length} {t("section", { ns: "test" })}
                </span>
              </Col>
              <Col>
                <OrderedListOutlined style={{ marginRight: 4 }} />
                <span>{t("move_section", { ns: "test" })}</span>
              </Col>
              <Col>
                <QuestionCircleOutlined style={{ marginRight: 4 }} />
                <span>
                  {data.totalQuestions} {t("Question", { ns: "test" })}
                </span>
              </Col>
              <Col>
                <TrophyOutlined style={{ marginRight: 4 }} />
                <span>
                  {data.totalScore} {t("score", { ns: "test" })}
                </span>
              </Col>
              <Col>
                <ClockCircleOutlined style={{ marginRight: 4 }} />
                <span>
                  {data.duration === 0
                    ? `${t("time_limit_(minutes)", { ns: "test" })}`
                    : `${data.duration}`}
                </span>
              </Col>
              <Col>
                <FileTextOutlined style={{ marginRight: 4 }} />
                <span>
                  {data.is_all_question_shown
                    ? `${t("show_all_questions_per_page", { ns: "test" })}`
                    : `${t("show_only_one_question_per_page", { ns: "test" })}`}
                </span>
              </Col>
              <Col>
                <ForkOutlined style={{ marginRight: 4 }} />
                <span>
                  {data.is_question_shuffled
                    ? `${t("keep_question_order", { ns: "test" })}`
                    : `${t("mix_question_order", { ns: "test" })}`}
                </span>
              </Col>
            </Row>
          </Col>
          <Col span={4} className="btn-group">
            <Link to="/tests/12/result" className="link">
              <FileDoneOutlined />
            </Link>
            <Button
              type="primary"
              className="btn-primary"
              icon={<PlusCircleOutlined />}
              size="large"
              onClick={handleClick}
            >
              {t("add_section", { ns: "test" })}
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <div onDragEnd={onDragEnd}>
          {sections.map((section) => (
            <div droppableId={`${section.id}`} key={section.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    padding: 4,
                    width: "100%",
                  }}
                >
                  <Section provided={provided} section={section}></Section>
                </div>
              )}
            </div>
          ))}
        </div>
      </Col>

      <Modal
        title={t("add_section_modal_title", { ns: "test" })}
        visible={sectionModal}
        onCancel={() => setSectionModal(false)}
        style={{ top: 25 }}
        footer={null}
      >
        <AddSection closeModal={() => setSectionModal(false)} type="add" />
      </Modal>
    </>
  )
}

export default TestSection
