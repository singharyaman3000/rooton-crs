import { Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Main from "./pages/Main";
import College from './pages/College'
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";

const App = () => {
  // const { loggedUser } = useContext(UserContext);
  

  return (
    <Box height="100vh" display="flex" flexDirection="column" overflow="scroll">
      <Router>
        <Routes>
          <Route path="/clg" element={<College />} />
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Navbar />} />
        </Routes>
        <ToastContainer />
      </Router>
    </Box>
  );
};

export default App;
