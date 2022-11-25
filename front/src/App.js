import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/navbar';
import Home from './layout/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './layout/users/AddUser';
import EditUser from './layout/users/EditUSer';
import ViewUser from './layout/users/ViewUser';
import Login from './layout/users/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          {
          <Route exact path="/" element = {<Login />} />
          }
          
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
