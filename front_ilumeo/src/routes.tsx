import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import WorkdayPage from './pages/WorkdayPage';
import EndDayPage from './pages/EndDayPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/workday" element={<WorkdayPage />} />
        <Route path="/endday" element={<EndDayPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
