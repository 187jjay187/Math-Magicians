/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Outlet } from 'react-router-dom';
// import Calculator from '../components/Calculator/Calculator';
import Navbar from '../components/Navbar/NavBar';

const App = () => (
  <>
    <Navbar />
    <div id="detail">
      <Outlet />
    </div>
  </>
);

export default App;
