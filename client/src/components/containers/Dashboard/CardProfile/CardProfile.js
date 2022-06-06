import { Avatar, Card, Row, Col } from 'antd';
import React from 'react';

const { Meta } = Card;

function CardProfile(props) {
  return (
    <>
      <Card size='small' className='card_profile'>
        <Row gutter={[8, 8]} align='middle'>
          <Col span={9}>
            <Meta
              avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
              title='Hoang Duc Nam'
              description='nam17081999@gmail.com'
            />
          </Col>
          <Col span={5}>
            <div className='info_profile'>
              <p>Mã khách hàng</p>
              <b>10465.10346</b>
            </div>
          </Col>
          <Col span={5}>
            <div className='info_profile'>
              <p>Lượt Thi</p>
              <b>10</b>
            </div>
          </Col>
          <Col span={5}>
            <div className='info_profile'>
              <p>Lượt Thi</p>
              <b>10</b>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CardProfile;
