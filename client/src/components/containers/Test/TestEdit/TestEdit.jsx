import { Breadcrumb, Row, Col, Typography, Divider } from 'antd'
import TestTopRight from './TestTopRight'
import { Link } from 'react-router-dom'
import TestDrag from './Drag/TestDrag'
import TestSection from './HasSection/TestSection'
function TestEdit() {
  return (
    <div className="container test-edit tab-style">
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/tests">Đề Thi</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Test name</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={24}>
          <Row align="middle" justify="space-between">
            <Col>
              <Typography.Title level={3}>Test name</Typography.Title>
            </Col>
            <Col>
              <TestTopRight />
            </Col>
          </Row>
        </Col>
        <Divider style={{ marginTop: 0, marginBottom: 12 }} />
        {/* <TestDrag data={questions} /> */}
        <TestSection data={questions} />
      </Row>
    </div>
  )
}

export default TestEdit

const questions = {
  id: 1,
  subExamGroupId: 2,
  test_type: 'normal',
  name: 'iq test',
  description: 'test your iq',
  duration: 0,
  has_multi_section: false,
  is_all_question_shown: false,
  language: 'VN',
  audio_type: false,
  is_question_shuffled: false,
  createdAt: '2022-05-25T06:17:00.000Z',
  updatedAt: '2022-05-25T06:19:26.000Z',
  totalExams: 2,
  totalQuestions: 4,
  Examinations: [
    {
      id: 1,
      testId: 1,
      name: 'kỳ thi 1',
    },
    {
      id: 2,
      testId: 1,
      name: 'kỳ thi 2',
    },
  ],
  Sections: [
    {
      id: 1,
      testId: 1,
      name: 'Câu hỏi phần 1',
      totalScore: 39,
      questions: [
        {
          _id: '628c9d0690c58fe6ab78cb4b',
          content: '1+1=?',
          score: 23,
          descriptions: "'sdsd'",
          sectionId: 1,
          answers: [
            {
              _id: '628c98d66ac736b0a3cd663b',
              questionId: '628c9d0690c58fe6ab78cb4b',
              content: '2',
            },
            {
              _id: '628d912b8a7b4c4219b12b25',
              questionId: '628c9d0690c58fe6ab78cb4b',
              content: '3',
            },
          ],
          correctAns: ['true'],
          createdAt: '2022-05-24T08:53:26.065Z',
          updatedAt: '2022-05-24T08:53:26.065Z',
          __v: 0,
          questionGroupId: '628c98106ac736b0a3cd662f',
          questionTypeId: '628c98516ac736b0a3cd6632',
        },
        {
          _id: '628d91658a7b4c4219b12b2f',
          content: '3+3?',
          score: 6,
          descriptions: "'sdsd'",
          sectionId: 1,
          answers: [
            {
              _id: '628d912f8a7b4c4219b12b26',
              content: '9-3',
              questionId: '628d91658a7b4c4219b12b2f',
            },
            {
              _id: '628d95238a7b4c4219b12b80',
              content: '6',
              questionId: '628d91658a7b4c4219b12b2f',
            },
            {
              _id: '628d952c8a7b4c4219b12b81',
              content: '4',
              questionId: '628d91658a7b4c4219b12b2f',
            },
          ],
          correctAns: ['true', 'true', 'false'],
          createdAt: '2022-05-24T08:53:26.065Z',
          updatedAt: '2022-05-24T08:53:26.065Z',
          __v: 0,
          questionGroupId: '628c98106ac736b0a3cd662f',
          questionTypeId: '628d921c8a7b4c4219b12b36',
        },
        {
          correctAns: [],
          _id: '628d969c8a7b4c4219b12b97',
          content: 'print hello word',
          score: 10,
          descriptions: "''",
          sectionId: 1,
          answers: [
            {
              _id: '628d96e18a7b4c4219b12b9e',
              content: 'hello world',
              questionId: '628d969c8a7b4c4219b12b97',
            },
          ],
          createdAt: '2022-05-24T08:53:26.065Z',
          updatedAt: '2022-05-24T08:53:26.065Z',
          __v: 0,
          questionGroupId: '628c98106ac736b0a3cd662f',
          questionTypeId: '628d92208a7b4c4219b12b38',
        },
      ],
    },
    {
      id: 5,
      testId: 1,
      name: 'Câu hỏi phần 2',
      totalScore: 12,
      questions: [
        {
          correctAns: [],
          _id: '628eea47b158e73b219a04c7',
          content: 'hello ',
          score: 12,
          descriptions: 'sdddđ',
          sectionId: 5,
          createdAt: '2022-05-24T08:53:26.065Z',
          updatedAt: '2022-05-24T08:53:26.065Z',
          __v: 0,
          questionGroupId: '628c98106ac736b0a3cd662f',
          questionTypeId: '628d921e8a7b4c4219b12b37',
        },
      ],
    },
  ],
  totalScore: 51,
}
