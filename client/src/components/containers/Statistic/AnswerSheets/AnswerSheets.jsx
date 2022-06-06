import { Button, Col, Form, Input, Pagination, Popover, Radio, Row, Tag } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Candidates from './Candidates/Candidates';



function AnswerSheets(props) {

  const { t } = useTranslation('statistic')

  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
    setFilterOptios('')
  };


  const [optionsSelected, setOptionsSelected] = useState([
    // { name: 'email', value: '@gami' }
  ])

  const [filterOptios, setFilterOptios] = useState('')


  function onClick(str) {
    setFilterOptios(str);
  }

  function renderfilterOptios() {

    const onFinish = (values) => {
      console.log('Success:', values);
      setOptionsSelected(prev => {
        const newSelector = [...prev]
        newSelector.push({
          ...values
        })
        return newSelector
      })


    };


    return <>
      <Col span={24}>
        {filterOptios}
      </Col >
      <Col span={24}>
        <Form
          onFinish={onFinish}
          initialValues={{

          }}
        >
          <Form.Item
            name={`${filterOptios}`}
          >
            <Input placeholder={`${filterOptios}`} />
          </Form.Item>
          <Form.Item>
            <Button onClick={hide} htmlType="submit" type="primary">{t('search', { ns: 'statistic' })}</Button>
          </Form.Item>
        </Form>
      </Col>

    </>
  }

  function back() {
    setFilterOptios('')
  }

  function addFilterOptions() {
    return (
      <>
        <Row gutter={[8, 8]} >
          <Col flex={1}>
            {filterOptios && <span onClick={back}> <a>{'<'}</a>  </span>}

            <span>{filterOptios ? filterOptios : t('add_filter_options', { ns: 'statistic' })}</span>
          </Col>
          <Col >
            <a onClick={hide}>X</a>
          </Col>

          {!filterOptios ?
            <>
              <Col span={24}>
                {t('filter_options', { ns: 'statistic' })}
              </Col>
              <Col span={24}>
                <a onClick={() => { onClick(t('email', { ns: 'statistic' })) }}>{t('email', { ns: 'statistic' })}</a>
                <a onClick={() => { onClick(t('identify_code', { ns: 'statistic' })) }}>{t('identify_code', { ns: 'statistic' })}</a>
                <a onClick={() => { onClick(t('full_name', { ns: 'statistic' })) }}>{t('full_name', { ns: 'statistic' })}</a>
                <a onClick={() => { onClick(t('phone', { ns: 'statistic' })) }}>{t('phone', { ns: 'statistic' })}</a>
                <a onClick={() => { onClick(t('position', { ns: 'statistic' })) }}>{t('position', { ns: 'statistic' })}</a>
                <a onClick={() => { onClick(t('group', { ns: 'statistic' })) }}>{t('group', { ns: 'statistic' })}</a>


              </Col >
            </> :
            <>{renderfilterOptios()}</>
          }
        </Row >
      </>
    )
  }

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    // //console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const log = (e) => {
  };

  const [page, setPage] = useState(test[1])

  function onChangePagination(e) {
    console.log(e);
    setPage(test[e])
  }


  return (
    <div className='answer_sheets'>
      <Row gutter={[16, 16]} justify='center'>
        <Col span={24}>
          <div className='white_bg pd_20'>
            <Row gutter={[8, 8]}>

              <Col span={24}>
                <Popover
                  placement="bottomLeft"
                  content={addFilterOptions}
                  trigger="click"
                  visible={visible}
                  onVisibleChange={handleVisibleChange}
                >
                  <Button type="primary">{t('add_filter_options', { ns: 'statistic' })}</Button>
                </Popover>
              </Col>
              <Col span={24}>
                <Radio.Group onChange={onChange}>
                  <Row gutter={[8, 8]}>
                    <Col span={24}>
                      <Radio value={1}>{t('include_all_options_filter', { ns: 'statistic' })}</Radio>
                    </Col><Col span={24}>
                      <Radio value={2}>{t('include_one_of_all_options_filter', { ns: 'statistic' })}</Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Col>
              <Col span={24} >
                {optionsSelected.map((items, index) => (
                  < Tag key={index} closable onClose={log} >
                    {
                      items[Object.keys(items)[0]] !== undefined
                      &&
                      `${Object.keys(items)[0]}: ${items[Object.keys(items)[0]]}`
                    }
                  </Tag >
                ))}
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={24}>
          <Candidates data={page} />
        </Col>
        <Col>
          <Pagination onChange={onChangePagination} defaultCurrent={1} pageSize={1} total={test.length - 1} hideOnSinglePage={true} />
        </Col>
      </Row>

    </div >
  );
}

export default AnswerSheets;






const test = [
  [],
  [
    {
      fullname: 'Trần Văn Hải',
      id: '123131212',
      phone: 23133545455,
      email: 'hai@221313',
      group: 'hai',
      position: 'hoc sinh',
      test: {
        name: 'test1',
        id: 123
      },
      test_campaign: {
        name: 'dot thi 2',
        id: 3123
      },
      evaluate: false,
      result: {
        result: '3/4',
        percent: 75
      },
      time: {
        do_test: '00:00:13',
        start: '14:56:33 25/05/2022',
        end: '14:56:46 25/05/2022'
      }
    },
    {
      fullname: 'Trần Văn Hải',
      id: '123131212',
      phone: 23133545455,
      email: 'hai@221313',
      group: 'hai',
      position: 'hoc sinh',
      test: {
        name: 'test1',
        id: 123
      },
      test_campaign: {
        name: 'dot thi 2',
        id: 3123
      },
      evaluate: false,
      result: {
        result: '3/4',
        percent: 75
      },
      time: {
        do_test: '00:00:13',
        start: '14:56:33 25/05/2022',
        end: '14:56:46 25/05/2022'
      }
    },

  ],

  [
    {
      fullname: 'Trần Văn Hải',
      id: '123131212',
      phone: 23133545455,
      email: 'hai@221313',
      group: 'hai',
      position: 'hoc sinh',
      test: {
        name: 'test1',
        id: 123
      },
      test_campaign: {
        name: 'dot thi 2',
        id: 3123
      },
      evaluate: false,
      result: {
        result: '3/4',
        percent: 75
      },
      time: {
        do_test: '00:00:13',
        start: '14:56:33 25/05/2022',
        end: '14:56:46 25/05/2022'
      }
    },
    {
      fullname: 'Trần Văn Hải',
      id: '123131212',
      phone: 23133545455,
      email: 'hai@221313',

      test: {
        name: 'test1',
        id: 123
      },
      test_campaign: {
        name: 'dot thi 2',
        id: 3123
      },
      evaluate: false,
      result: {
        result: '3/4',
        percent: 75
      },
      time: {
        do_test: '00:00:13',
        start: '14:56:33 25/05/2022',
        end: '14:56:46 25/05/2022'
      }
    },

  ]
]


