import { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Home from './Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#2fc18c',
      },
      secondary: {
        main: '#3f51b5',
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#F4F6F8',
        paper: darkMode ? '#232323' : '#FFF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkmode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
