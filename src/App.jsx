import React from 'react'
import About from './components/about/About'
import Testimonial from './components/testimonial/Testimonial'
import HomePage from './pages/homematerialui/HomePage'

import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    {/* <About/> */}
    {/* <Testimonial/> */}

    <HomePage/>
    </ThemeProvider>
  )
}
