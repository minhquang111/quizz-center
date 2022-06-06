import { Button, Col, Pagination, Progress, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";



function ListStatistic(props) {
    const { t } = useTranslation('statistic')


    return (
        <>
            <Row gutter={[16, 16]} justify='center'>
                <Col span={24}>
                    <div className='list_statistic white_bg pd_20'>
                        <table>
                            <tbody>
                                <tr >
                                    <th>{t('test_name', { ns: 'statistic' })} {props.name}</th>
                                    <th>{t('completed_total', { ns: 'statistic' })}</th>
                                    <th>{t('average_correct_completion_percent', { ns: 'statistic' })}</th>
                                    <th>{t('average_score', { ns: 'statistic' })}</th>
                                    <th>{t('average_duration', { ns: 'statistic' })}</th>
                                </tr>
                                {test.map((items, index) => (
                                    <tr key={index}>
                                        <td>{items.test_name}</td>
                                        <td>
                                            {items.com_total.com ? items.com_total.com : <span>-</span>}
                                            /
                                            {items.com_total.total ? items.com_total.total : <span>-</span>}
                                        </td>
                                        <td>{items.persent}% <Progress percent={items.persent} showInfo={false} /></td>
                                        <td>{items.score}</td>
                                        <td>{items.time_tb}</td>
                                        <td><Link to={`/test-campaigns/:id/result`}><Button type="primary">{t('bt_result', { ns: 'statistic' })}</Button></Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col>
                    <Pagination defaultCurrent={1} total={50} />
                </Col>
            </Row>
        </>
    );
}

export default ListStatistic;

const test = [

    {
        test_name: 'sadsadds',
        com_total: {
            com: 1,
            total: 10
        },
        persent: 10,
        score: 3,
        time_tb: '00:00:13'
    },
    {
        test_name: 'sadsadds',
        com_total: {
            com: 1,
            total: 10
        },
        persent: 10,
        score: 3,
        time_tb: '00:00:13'
    },
    {
        test_name: 'sadsadds',
        com_total: {
            com: 1,
            total: 10
        },
        persent: 10,
        score: 3,
        time_tb: '00:00:13'
    },
    {
        test_name: 'sadsadds',
        com_total: {
            com: '',
            total: 10
        },
        persent: 10,
        score: 3,
        time_tb: '00:00:13'
    }
]
