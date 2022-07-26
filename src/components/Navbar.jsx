import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '83px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '128px', height: '108px', margin: '0px 15px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#b2becd', borderBottom: '3px solid #ffb700' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#b2becd' }}>Exercises</a>
      <Link to="/BmiCalculator" style={{ textDecoration: 'none', color: '#b2becd' }}>BMI Calculator</Link>
    </Stack>
  </Stack>
);

export default Navbar;
