import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [employeeId, setEmployeeId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (employeeId.trim()) {
      navigate("/workday"); 
    } else {
      alert("Por favor, insira seu código!");
    }
  };

  return (
    <div className="login-page content">
      <div className="header">
        <h1>ILUMEO</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Código manual"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <button className="btn" type="submit">
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
