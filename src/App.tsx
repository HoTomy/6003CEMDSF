import { Layout, Space } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import DetailDog from './components/DetailDog';
import NewDog from './components/NewDog';
import UpdateDog from './components/UpdateDog';
import Dogs2 from './components/Dogs2';
import DeleteDog from './components/DeleteDog';
import Filter from './components/FilterDog';
import Register from './components/Register';
import Login from './components/Login';
import Public from './components/Public';
import Dogapi1 from './components/Dogapi1';

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <Router>
      <Header>
        <nav>
          <Space>
            <Link to="/Home">Home</Link>
            <Link to="/Filter">Filter</Link>
            <Link to="/Dogapi1">Breeds Api</Link>
          </Space>
        </nav>
      </Header>
      <Content>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/a/:aid" element={<DetailDog />} />
          <Route path="/NewDog" element={<NewDog />} />
          <Route path="/Dog2" element={<Dog2 />} />
          <Route path="/b/:bid" element={<UpdateDog />} />
          <Route path="/c/:cid" element={<DeleteDog />} />
          <Route path="/Filter" element={<Filter />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Public" element={<Public />} />
          <Route path="/Dogapi1" element={<Dogapi1 />} />
        </Routes>
      </Content>
      <Footer>
        <p>Pet Shelter</p>
      </Footer>
    </Router>
  )
}