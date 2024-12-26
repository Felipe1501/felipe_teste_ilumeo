import React from "react";
import { useNavigate } from "react-router-dom";

const EndDayPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClockOut = () => {

    alert("Hora de saída registrada com sucesso!");
    navigate("/"); 
  };

  return (
    <div className="endday-page content">
      <div className="header">
        <h1>ILUMEO</h1>
      </div>
      <p>Total trabalhado no dia 02/01/25:</p>
      <strong>7h 31m</strong>
      <button className="btn" onClick={handleClockOut}>
        Confirmar
      </button>
    </div>
  );
};

export default EndDayPage;
