import { Layout, Row, Col } from 'antd';
import { Outlet } from 'react-router-dom';
import HeaderPage from './HeaderPage';

function LayoutWeb(props) {
  return (
    <div className='layout--web'>
      <Row justify='center' className='page--header' gutter>
        <Col xl={17} lg={20} md={20} xs={24}>
          <HeaderPage />
        </Col>
      </Row>
      <Row justify='center'>
        <Col xl={17} lg={20} md={20} xs={24}>
          <div className='Content'>
            <Outlet />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LayoutWeb;
