import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import Lend from "./pages/Lend.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/lend" element={<Lend />} />
      </Routes>
    </Router>
  );
}

export default App;