import { Dropdown, Menu, Space, Row, Col, BackTop, Tooltip, Button } from 'antd'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { YoutubeFilled, UpOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeLocales,
  LANGUAGE_EN,
  LANGUAGE_VI,
  multiLanguageSelector,
} from '../../slices/multiLanguage'



function HeaderPage(props) {
  const location = useLocation()
  const { t, i18n } = useTranslation('common')
  const { language } = useSelector(multiLanguageSelector)

  const dispatch = useDispatch()
  const handleClick = (language) => {
    if (language === LANGUAGE_VI) {
      dispatch(changeLocales(LANGUAGE_EN))
      i18n.changeLanguage(LANGUAGE_EN)
    } else {
      dispatch(changeLocales(LANGUAGE_VI))
      i18n.changeLanguage(LANGUAGE_VI)
    }
  }
  const style = {
    height: 50,
    width: 65,
    lineHeight: '40px',
    borderRadius: 6,
    backgroundColor: 'rgba(1,14,27,.7)',
    color: '#fff',
    textAlign: 'center',
  }

  const [forcus, setForcus] = useState(location.pathname)

  function onSelect({ item, key }) {
    setForcus(key)
  }

  const menu = (
    <Menu
      items={[
        {
          label: (
            <>
              <p>Trần Văn Hải</p>
              <p>1851061589@e.tlu.edu.vn</p>
              <p>Mã khách hàng: 10465.10346</p>
            </>
          ),
          key: '0',
        },
        {
          type: 'divider',
        },
        {
          label: <>Số lượt thi Test IT: 2</>,
          key: '0',
        },
        {
          type: 'divider',
        },
        {
          label: <Link to="/account">Quản lý tài khoản</Link>,
          key: '2',
        },
        {
          label: <Link to="/account/profile">Thông tin cá nhân</Link>,
          key: '3',
        },
        {
          label: <Link to="/">Đăng xuất</Link>,
          key: '4',
          danger: true,
        },
      ]}
    />
  )

  return (
    <Row align="middle" wrap={false}>
      <Col>
        <Link to="/">
          <img src={require('../../assets/img/logo (1).png')} />
        </Link>
      </Col>
      <Col flex={1}>
        <Menu
          mode="horizontal"
          selectedKeys={forcus}
          defaultSelectedKeys={['/']}
          onSelect={onSelect}
        >
          <Menu.Item key="/">
            <Link to="/">{t('header.dashboard')}</Link>
          </Menu.Item>
          <Menu.Item key="/test-categories">
            <Link to="/test-categories">{t('header.category')}</Link>
          </Menu.Item>
          <Menu.Item key="/tests">
            <Link to="/tests">{t('header.test')}</Link>
          </Menu.Item>
          <Menu.Item key="/test-campaigns">
            <Link to="/test-campaigns">{t('header.test_campaign')}</Link>
          </Menu.Item>
          <Menu.Item key="/bank">
            <Link to="/bank">{t('header.question_bank')}</Link>
          </Menu.Item>
          <Menu.Item key="/statistic/campaigns">
            <Link to="/statistic/campaigns">{t('header.statistic')}</Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col>
        <Button type="text" onClick={() => handleClick(language)}>
          {t('header.language')}  <img src={t('header.img')} />
        </Button>
      </Col>
      <Col>

        <Dropdown overlay={menu} placement="bottomRight">
          <a onClick={(e) => e.preventDefault()}>
            <Space>Me</Space>
          </a>
        </Dropdown>
      </Col>

      <BackTop>
        <div className='up'><UpOutlined /></div>
      </BackTop>


      <div className='guideline-video'>
        <Tooltip placement="left" title="Hướng dẫn sử dụng">
          <a href="https://www.youtube.com" ><YoutubeFilled /></a>
        </Tooltip>

      </div>

    </Row>

  );
}

export default HeaderPage
