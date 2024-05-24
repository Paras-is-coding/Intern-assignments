import React from 'react'
// import About from './components/about/About'
// import Testimonial from './components/testimonial/Testimonial'
// import HomePage from './pages/homematerialui/HomePage'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeCollage1 from './pages/homecollage1/HomeCollage1';
const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    {/* <About/> */}
    {/* <Testimonial/> */}

    {/* <HomePage/> */}
    <HomeCollage1/>
    </ThemeProvider>
  )
}
