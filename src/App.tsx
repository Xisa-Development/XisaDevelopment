import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppLayout } from "./components/Layout";
import { theme } from "./theme/theme";

function App() {
  return (
    <div style={{background: theme.colors.background}}>
      <Router>
        <AnimatePresence mode="wait">
          <AppLayout />
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
