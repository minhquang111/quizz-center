import { IdcardOutlined, MailOutlined, FormOutlined, FieldTimeOutlined, ExclamationCircleFilled, PlusOutlined, PlayCircleOutlined, MinusCircleOutlined, CloseCircleOutlined, PhoneOutlined, QrcodeOutlined, RocketOutlined, TeamOutlined, CheckOutlined, LinkOutlined, ShareAltOutlined, CodeSandboxCircleFilled } from '@ant-design/icons';
import { Breadcrumb, Col, Row, Divider, Progress, Button, Modal, Steps, Input, message, Form, Checkbox, Select, Space, Radio } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react'
import copy from 'copy-text-to-clipboard'
import { Receiver, From, SendScore, SendResult } from '../../../../utils/utils'
import { useTranslation } from 'react-i18next'

const { Option } = Select;

const sights = {
    Beijing: ['Tiananmen', 'Great Wall'],
    Shanghai: ['Oriental Pearl', 'The Bund'],
};


function ResultsStatistic(props) {

    const { t } = useTranslation('statistic')

    //modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function onClickCopy() {
        copy('hello')
        message.success({
            content: 'Sao chép thành công',
        })
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [form] = Form.useForm();

    const [renderInputOrtherMail, setrenderInputOrtherMail] = useState(false)

    function onChangeRadioFrom(e) {
        console.log('radio checked', e.target.value);
        e.target.value === 2 ? setrenderInputOrtherMail(true) : setrenderInputOrtherMail(false)
    }

    const [renderAddMail, setRenderAddMail] = useState(false)

    function onChangeReceiver(e) {
        console.log(e.target.value)
        e.target.value === 1 ? setRenderAddMail(false) : setRenderAddMail(true)
    }

    return (
        <div className='results_statistic'>
            <Row gutter={[24, 24]} >
                <Col span={24}>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/test-campaigns"><span>{t('test_campaign_br', { ns: 'statistic' })}</span></Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/test-campaigns/:id/result"><span>{t('the_test_campaign_result', { ns: 'statistic' })}</span></Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Trần Văn Hải
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col span={8}>
                    <Row gutter={[16, 16]} >
                        <Col span={24} >
                            <div className='white_bg pd_20'>

                                <h6> Trần Văn Hải</h6>
                                <p><QrcodeOutlined /> ma dinh danh</p>
                                <p><PhoneOutlined /> phone</p>
                                <p><MailOutlined /> mail</p>
                                <p><TeamOutlined /> group</p>
                                <p><RocketOutlined /> vi tri</p>
                                <p><IdcardOutlined /> 113.23.55.30</p>
                                <Divider />
                                <Row gutter={[8, 8]} className='result_test'>
                                    <Col flex={1}>

                                        <div className='point'><span>2.5</span> /3 {t('point', { ns: 'statistic' })}</div>
                                    </Col>
                                    <Col>

                                        <div className='pass_box pass'> <CheckOutlined /> {t('passed', { ns: 'statistic' })}</div>
                                        <div className='pass_box un_pass'> <ExclamationCircleFilled /> {t('failed', { ns: 'statistic' })}</div>

                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={14}>
                                                <p> {t('completion_percentage', { ns: 'statistic' })}: <span>50.5%</span> </p>
                                            </Col>
                                            <Col span={10}><Progress percent={50} showInfo={false} /></Col>

                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col flex={1}>
                                                {t('total_correct_questions', { ns: 'statistic' })}
                                            </Col>
                                            <Col >
                                                <span >1/2</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col flex={1}>
                                                {t('duration', { ns: 'statistic' })}
                                            </Col>
                                            <Col >
                                                <span>00:00:14</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Button type='primary' onClick={showModal}> <ShareAltOutlined /> {t('share_test_result', { ns: 'statistic' })} </Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col span={24}>
                            <div className='white_bg pd_20'>
                                <Row gutter={[8, 8]}>
                                    <Col>
                                        <h6>{t('timeline', { ns: 'statistic' })}</h6>
                                    </Col>
                                    <Col span={24}>
                                        <Steps progressDot current={10} direction="vertical">
                                            <Steps.Step title={[<FieldTimeOutlined />, ' 11-05-2022 17:02:26']} description={[<PlayCircleOutlined />, ' Ứng viên bắt đầu làm bài thi']} />
                                            <Steps.Step title={[<FieldTimeOutlined />, ' 11-05-2022 17:02:32']} description={[<FormOutlined />, ' Ứng viên bắt đầu làm câu hỏi số 1.1']} />
                                            <Steps.Step title={[<FieldTimeOutlined />, ' 11-05-2022 17:02:32']} description={[<FormOutlined />, ' Ứng viên bắt đầu làm câu hỏi số 1.1']} />
                                            <Steps.Step title={[<FieldTimeOutlined />, ' 11-05-2022 17:02:32']} description={[<FormOutlined />, ' Ứng viên bắt đầu làm câu hỏi số 1.1']} />
                                            <Steps.Step title={[<FieldTimeOutlined />, ' 11-05-2022 17:02:32']} description={[<FormOutlined />, ' Ứng viên bắt đầu làm câu hỏi số 1.1']} />
                                            <Steps.Step title={[<FieldTimeOutlined />, ' 11-05-2022 17:02:32']} description={[<FormOutlined />, ' Ứng viên bắt đầu làm câu hỏi số 1.1']} />
                                            <Steps.Step title={[<FieldTimeOutlined />, ' 11-05-2022 17:02:32']} description={[<FormOutlined />, ' Ứng viên bắt đầu làm câu hỏi số 1.1']} />
                                            <Steps.Step title={[<FieldTimeOutlined />, ' 11-05-2022 17:02:32']} description={[<FormOutlined />, ' Ứng viên bắt đầu làm câu hỏi số 1.1']} />
                                            <Steps.Step title={[<FieldTimeOutlined />, ' 11-05-2022 17:02:32']} description={[<FormOutlined />, ' Ứng viên bắt đầu làm câu hỏi số 1.1']} />
                                            <Steps.Step title={[<FieldTimeOutlined />, ' 11-05-2022 17:03:01']} description={[<CloseCircleOutlined />, ' Ứng viên kết thúc bài thi']} />

                                        </Steps>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                    </Row>
                </Col>
                <Col span={16}>
                    <Row gutter={[16, 16]} >
                        <Col span={24}>
                            <div className='white_bg pd_20'>
                                <Row>
                                    <Col span={24}>
                                        <h6>{t('test_detail', { ns: 'statistic' })}</h6>
                                    </Col>
                                    <Col span={24}>
                                        <div className='question_order'>CÂU HỎI 1</div>

                                    </Col>
                                    <Divider />
                                    <Col span={24}>
                                        <div className='question_order'>CÂU HỎI 2</div>

                                    </Col>

                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row >


            <Modal
                title="Gửi kết quả qua email"
                visible={isModalVisible}
                onCancel={handleCancel}
                width={800}
                className='modal_result_statistic'
                footer={null}

            >
                <Row gutter={[16, 16]}>
                    <Col span={10}>
                        <Row gutter={[8, 8]}>
                            <Col >
                                <h6>1. {t('share_by_link', { ns: 'statistic' })}</h6>
                            </Col>
                            <Col span={14} offset={4}>
                                {t('qr_view_test_result', { ns: 'statistic' })}
                            </Col>
                            <Col span={12} offset={6}>
                                <QRCodeSVG value="https://google.com/" />
                            </Col>
                            <Col span={24}>
                                <Input defaultValue={'sadadsad'} placeholder="default size" onClick={onClickCopy} prefix={<LinkOutlined />} />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={14}>
                        <Row gutter={[8, 8]}>
                            <Col >
                                <h6>2. {t('send_result_via_emails', { ns: 'statistic' })}</h6>
                            </Col>
                            <Col>
                                <Form
                                    name="basic"
                                    initialValues={
                                        {
                                            receiver: Receiver.send_to_examinee,
                                            from: From.default_email,
                                            score: [SendScore.score, SendScore.completion_percentage],
                                            result: [SendResult.display_answer, SendResult.pass_or_fail],
                                            subject: t('value_subject', { ns: 'statistic' }),
                                            mail_send: t('test_campaign', { ns: 'statistic' })

                                        }
                                    }
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"

                                >
                                    <Form.Item name="receiver" label={t('receiver', { ns: 'statistic' })}>
                                        <Radio.Group onChange={onChangeReceiver}>
                                            <Radio value={Receiver.send_to_examinee}>{t('send_result_to_examinee_email', { ns: 'statistic' })}</Radio>
                                            <Radio value={Receiver.other_emails}>{t('send_to_other_emails', { ns: 'statistic' })}</Radio>
                                        </Radio.Group>
                                    </Form.Item>

                                    {renderAddMail && <Form.List name="email">
                                        {(fields, { add, remove }) => (
                                            <>

                                                {fields.map(({ key, name, ...restField }) => (
                                                    <Space
                                                        key={key}
                                                        align="baseline"
                                                    >

                                                        <Form.Item
                                                            {...restField}
                                                            name={name}
                                                            label={t('recipient_address', { ns: 'statistic' })}

                                                        >
                                                            <Input placeholder={t('recipient_address', { ns: 'statistic' })} type={'email'} />
                                                        </Form.Item>
                                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                                    </Space>
                                                ))}

                                                <Form.Item>
                                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined onClick={() => add()} />}>
                                                        {t('add_email', { ns: 'statistic' })}
                                                    </Button>
                                                </Form.Item>
                                            </>
                                        )}
                                    </Form.List>}

                                    <Form.Item name="from" label={t('from', { ns: 'statistic' })}>
                                        <Radio.Group onChange={onChangeRadioFrom}>
                                            <Radio value={From.default_email}>Netko</Radio>
                                            <Radio value={From.other_email}>{t('other_emails', { ns: 'statistic' })}</Radio>
                                        </Radio.Group>
                                    </Form.Item>


                                    {renderInputOrtherMail && <Form.Item name="mail_send" offset={10}>
                                        <Col span={24} offset={7}>
                                            <Input placeholder={t('other_emails', { ns: 'statistic' })} />
                                        </Col>
                                    </Form.Item>}

                                    <Form.Item name="score" label={t('score', { ns: 'statistic' })} >
                                        <Checkbox.Group>

                                            <Col span={24}>
                                                <Checkbox value={SendScore.score}>
                                                    {t('score_label', { ns: 'statistic' })}
                                                </Checkbox>
                                            </Col>
                                            <Col span={24}>
                                                <Checkbox value={SendScore.completion_percentage}>
                                                    {t('completion_percentage', { ns: 'statistic' })}
                                                </Checkbox>
                                            </Col>

                                        </Checkbox.Group>
                                    </Form.Item>

                                    <Form.Item name="result" label={t('result_label', { ns: 'statistic' })}>
                                        <Checkbox.Group>
                                            <Row>
                                                <Col span={24}>
                                                    <Checkbox value={SendResult.pass_or_fail} >
                                                        {t('pass_fail', { ns: 'statistic' })}
                                                    </Checkbox>
                                                </Col>
                                                <Col span={24}>
                                                    <Checkbox value={SendResult.display_answer} >
                                                        {t('display_answers_correct_incorrect', { ns: 'statistic' })}
                                                    </Checkbox>
                                                </Col>
                                            </Row>
                                        </Checkbox.Group>
                                    </Form.Item>

                                    <Form.Item
                                        label={t('subject', { ns: 'statistic' })}
                                        name="subject"

                                    >
                                        <Input />
                                    </Form.Item>

                                    <Row justify='end' gutter={[8, 8]}>
                                        <Col>
                                            <Form.Item>
                                                <Button onClick={handleCancel}>
                                                    {t('close', { ns: 'statistic' })}
                                                </Button>
                                            </Form.Item>
                                        </Col>

                                        <Col>
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit">
                                                    {t('send', { ns: 'statistic' })}
                                                </Button>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal >
        </div >
    );
}

export default ResultsStatistic;