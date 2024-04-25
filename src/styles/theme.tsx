import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    allVariants: {
      fontFamily: `'Inter', sans-serif`,
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '-0.7px',
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
