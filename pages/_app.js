import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";

const theme1 = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#E09F5E',
      contrastText: 'rgba(59,33,11,0.9)',
    },
    secondary: {
      main: '#5a6582',
    },
    background: {
      default: '#FAFAFA',
      paper: '#fff',
    },
    divider: '#7a6d76',
  },
  shape: {
    borderRadius: 4,
  },
  props: {
    MuiAppBar: {
      color: 'default',
      background: 'default',
    },
    paper:{
      elevation :'9',
    }
  },

  
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme1}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
