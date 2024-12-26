import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WorkdayPage from "./pages/WorkdayPage";
import EndDayPage from "./pages/EndDayPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
    
          <Route path="/" element={<LoginPage />} />
          
          <Route path="/workday" element={<WorkdayPage />} />

          <Route path="/endday" element={<EndDayPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
