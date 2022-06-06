import { Menu, Row, Col } from 'antd';
import React from 'react';
import {
    Link, Outlet
} from "react-router-dom";
import { useTranslation } from 'react-i18next'

function Statistic(props) {

    const { t } = useTranslation('statistic')

    return (
        <div className='statistic'>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Menu mode="horizontal">
                        <Menu.Item>
                            <Link to="/statistic/campaigns">{t('test_campaign', { ns: 'statistic' })}</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/statistic/tests">{t('test', { ns: 'statistic' })}</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/statistic/answer-sheets">{t('candidates', { ns: 'statistic' })}</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col span={24}>
                    <Outlet />
                </Col>
            </Row>
        </div>
    );
}

export default Statistic;