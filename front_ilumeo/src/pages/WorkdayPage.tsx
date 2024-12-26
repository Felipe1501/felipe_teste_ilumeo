import React from "react";
import { useNavigate } from "react-router-dom";

const WorkdayPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClockIn = () => {
    
    alert("Hora de entrada registrada com sucesso!");
    navigate("/endday"); 
  };

  return (
    <div className="workday-page content">
      <div className="header">
        <h1>ILUMEO</h1>
      </div>
      <p>Seleção de ponto:</p>
      <strong>3h 01m</strong>
      <button className="btn" onClick={handleClockIn}>
        Hora de entrada
      </button>
    </div>
  );
};

export default WorkdayPage;
