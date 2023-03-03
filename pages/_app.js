import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
import { AuthProvider } from "./context/AuthContext";
import { SessionProvider } from "next-auth/react";
import { Ubuntu } from "@next/font/google";


const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
})

const wiishyTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      light: "#1A32E0",
      main: "#1429cb",
      dark: "#1325AD",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFF025",
    },
    background: {
      default: "#fff",
      paper: "#f2fafe",
    },
    divider: "#7a6d76",
  },
  status: {
    danger: "#e53e3e",
  },
  neutral: {
    main: "#64748B",
    contrastText: "#fff",
  },
  props: {
    MuiAppBar: {
      color: "default",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          backgroundColor: "white",
          color: "#000",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          backgroundColor: "#ebf3f7",
          borderRadius: 10,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: "#1CA1E49D",
        },
        paper: {
          borderRadius: "15px 15px 0px 0px",
        },
      },
    },
  },
  typography: {
    fontFamily: ubuntu,
  },
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ThemeProvider theme={wiishyTheme}>
      <SessionProvider session={session}> 
      <main className={ubuntu.className}>              
          <Component {...pageProps} /> 
      </main>
      </SessionProvider>
    </ThemeProvider>
  );
}
