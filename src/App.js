import React from 'react'
import './App.css';
import { Box } from '@mui/material';
import {Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExcerciseDetail from './pages/ExcersiceDetail';
import BmiCalculator from './pages/BmiCalculator';

const App = () => {
  return (
    <Box width="400px" sx={ {width: { xl: '1488px'} } } m="auto">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExcerciseDetail />} />
          <Route path="/BmiCalculator" element={<BmiCalculator />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App;