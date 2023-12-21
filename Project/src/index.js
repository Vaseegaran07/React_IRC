import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './components/Login';
import About from './components/About/About';
import Register from './components/Register';
import Services from './components/Services/Services';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Support from './components/Support/Support';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}></Route>
      <Route path = "/Login" element = {<Login />}></Route>
      <Route path = "/About" element = {<About />}></Route>
      <Route path = "/Register" element = {<Register />}></Route>
      <Route path = "/Login" element = {<Login />}></Route>
      <Route path = "/Services" element = {<Services />}></Route>
      <Route path = "/Contacts" element = {<Contact />}></Route>
      <Route path = "/Support" element = {<Support />}></Route>
    </Routes>
  </BrowserRouter>
);

