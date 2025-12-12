import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import AddUser from './AddUser';
import GetUsers from './GetUsers';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import EditUser from './EditUser';
import "./styles/nav.css"
import "./styles/Register.css"


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/getUsers" element={<GetUsers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/editUser/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
