import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";
import { AppLayout } from "./components/Layout";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#d30da1" },
    secondary: { main: "#13aaf0" },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AnimatePresence mode="wait">
          <AppLayout />
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}

export default App;
