import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Phandalim from "./pages/Phandalim";
import STK from "./pages/STK";
import Tomb from "./pages/Tomb";
import Dualidade from "./pages/Dualidade";
import FairyTales from "./pages/FairyTales";
import Sidebar from "./components/sidebar/Sidebar";
import MISC from "./pages/MISC";

function App() {
  return (
    <Router>
      <Sidebar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phandalim" element={<Phandalim />} />
          <Route path="/stk" element={<STK />} />
          <Route path="/tomb" element={<Tomb />} />
          <Route path="/dualidade" element={<Dualidade />} />
          <Route path="/tales" element={<FairyTales />} />
          <Route path="/misc" element={<MISC />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
