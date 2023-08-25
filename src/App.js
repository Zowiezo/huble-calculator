import React, { useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Typography,
  ThemeProvider,
  createTheme
} from '@mui/material';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#013562',
    },
  },
});

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = new Function('return ' + input)();
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };


  const handleClear = () => {
    setInput('');
    setResult('0');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleCalculate();
    } else if (event.key === 'c') {
      handleClear();
      event.preventDefault();
    } else {
      const allowedKeys = ['+', '-', '*', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      if (!allowedKeys.includes(event.key)) {
        event.preventDefault();
      }
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          width: '80vh',
          marginLeft: '50vh',
          marginTop: '25vh',
          borderTop: '50px solid #013562',
          borderLeft: '5px solid #013562',
          borderRight: '5px solid #013562',
          borderBottom: '5px solid #013562',
        }}>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          style={{ height: '20vh', marginBottom: '5vh', }}
        >
          <Grid item xs={12} sm={10}>
            <Card variant="outlined"
              sx={{
                borderRadius: 3,
                width: '100%',
                border: '1.5px solid #013562',
              }}>
              <CardContent>
                <TextField
                  variant="outlined"
                  fullWidth
                  sx={{
                    width: '15vh',
                    marginBottom: 2,
                    border: '2px solid #013562',
                  }}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <div className="button-container">
                  <Grid justifyContent="center" container spacing={1}>
                    <Grid item>
                      <Button variant="contained" onClick={() => handleButtonClick('+')}>+</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" onClick={() => handleButtonClick('-')}>-</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" onClick={() => handleButtonClick('*')}>*</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" onClick={() => handleButtonClick('/')}>/</Button>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10}>
            <Card variant="outlined"
              sx={{
                borderRadius: 3,
                width: '100%',
                height: '15vh',
                border: '1.5px solid #013562',
              }}>
              <CardContent sx={{ marginTop: '2vh', }}>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>{result}</Typography>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>Result: {result}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
