import { Layout } from 'antd';
import { useRoutes } from 'react-router-dom';
import { routes } from './routers/routers';

const { Header, Content } = Layout;

function App() {
  let element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
