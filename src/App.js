
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import DashBoard from './components/DashBoard';
import Order from './components/Order';
import Employee from './components/Employee';
import Inventory from './components/Inventory';

function App() {
  return (
      <Router>
              <Header/>
          <Routes>
              <Route path= '/dashboard' element={<DashBoard/>} />
              <Route path='/inventory' element={<Inventory/>} />
              <Route path='/order' element={<Order/>} />
              <Route path='/employee' element={<Employee/>} />
          </Routes>
      </Router>

  );
}

export default App;
