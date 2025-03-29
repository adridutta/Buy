import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WineGlassComponent from './WineGlassComponent'
import theme from './theme/theme';
import { Box, ThemeProvider, CssBaseline, Button } from '@mui/material';
import video from './videos/vid3.mp4'

function App() {
  const [count, setCount] = useState(0)

  // Crit: update callback
  return (

    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <video
        autoPlay
        loop
        muted
        controls={false}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0, 
        }}
      >
        <source src={video} type="video/mp4" />
        
      </video>
      <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          justifyContent="center"
          sx={{ height: '100vh', width: '100%', zIndex: 2}} // Centers the content vertically and horizontally
      >
        <ThemeProvider theme={theme}>
          <WineGlassComponent onBuyNowClick = {(state) => setCount(0)}/>
        </ThemeProvider>
      </Box>
    </div>
  );
}

export default App
