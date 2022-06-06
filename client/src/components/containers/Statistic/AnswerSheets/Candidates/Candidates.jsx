import { Button, Col, Form, Input, Popover, Radio, Row, Tag, Empty, Pagination } from 'antd';
import React, { useState } from 'react';
import { UserOutlined, RocketOutlined, FlagFilled, FileFilled, QrcodeOutlined, PhoneOutlined, MailOutlined, TeamOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'





function Candidates(props) {
    const { t } = useTranslation('statistic')

    const test = props.data

    return (
        <div>
            <div className='white_bg pd_20'>
                <Row gutter={[8, 8]}>
                    <Col span={24}>
                        {t('total', { ns: 'statistic' })}: {test.length}
                    </Col>
                    <Col span={24}>
                        <table>
                            <tbody>
                                <tr >
                                    <th>{t('candidate_information', { ns: 'statistic' })}</th>
                                    <th>{t('test_information', { ns: 'statistic' })}</th>
                                    <th>{t('evaluate', { ns: 'statistic' })}</th>
                                    <th>{t('result', { ns: 'statistic' })}</th>
                                    <th>{t('time', { ns: 'statistic' })}</th>
                                    <th></th>
                                </tr>
                                {test.length === 0 ? <tr><Empty /></tr> :

                                    test.map((items, index) => (
                                        <>
                                            < tr >
                                                <td>
                                                    {items.fullname && <p><UserOutlined /> {items.fullname} </p>}
                                                    {items.id && <p><QrcodeOutlined /> {items.id}</p>}
                                                    {items.phone && <p><PhoneOutlined /> {items.phone}</p>}
                                                    {items.email && <p><MailOutlined /> {items.email}</p>}
                                                    {items.group && <p><TeamOutlined /> {items.group}</p>}
                                                    {items.position && <p><RocketOutlined /> {items.position}</p>}

                                                </td>
                                                <td>
                                                    <a href={`/tests/${items.test.id}/edit`} target="_blank"><FileFilled />  {items.test.name}</a>
                                                    <br />
                                                    <a href={`/tests/${items.test_campaign.id}/edit`} target="_blank"><FlagFilled /> {items.test_campaign.name}</a>
                                                </td>
                                                <td>
                                                    {items.evaluate ? <span className='pass'>{t('passed', { ns: 'statistic' })}</span> : <span className='not_pass'>{t('failed', { ns: 'statistic' })}</span>}
                                                </td>
                                                <td>
                                                    {items.result.result && <p>{items.result.result}</p>}
                                                    {items.result.percent && <p>({items.result.percent} %)</p>}
                                                </td>
                                                <td>
                                                    <p>{t('time_do_test', { ns: 'statistic' })}: <span>00:00:04</span></p>
                                                    <p>{t('start_at', { ns: 'statistic' })}: <span>14:58:35 12/05/2022</span></p>
                                                    <p>{t('end_at', { ns: 'statistic' })}: <span>14:58:39 12/05/2022</span></p>
                                                </td>
                                                <td><Link to="/results/:id"><Button type="primary">{t('bt_result', { ns: 'statistic' })}</Button></Link></td>
                                            </tr>

                                        </>))


                                }
                            </tbody>
                        </table>


                    </Col>
                </Row>
            </div>
        </div >
    );
}

export default Candidates;


