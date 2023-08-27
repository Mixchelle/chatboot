import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './Cadastro.Style.css';
import { useNavigate } from 'react-router-dom';


const Cadastro = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("As senhas digitadas não são iguais.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: login,
          password: password,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Cadastro realizado com sucesso!");
        navigate('/');
      } else {
        setErrorMessage("Ocorreu um erro no cadastro.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Ocorreu um erro no cadastro.");
    }
  };


  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="container">
    <form className="form">
      <h1>Cadastrar</h1>
      <div className="input-div">
        <label>Login:</label>
        <input
          className="form--input"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
  
      <div className="input-div">
        <label>Senha:</label>
        <div className="input-with-icon">
          <input
            className="form--input"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <FaEyeSlash
              className="password-icon"
              onClick={handleTogglePasswordVisibility}
            />
          ) : (
            <FaEye
              className="password-icon"
              onClick={handleTogglePasswordVisibility}
            />
          )}
        </div>
      </div>
  
      <div className="input-div">
        <label>Confirmar Senha:</label>
        <div className="input-with-icon">
          <input
            className="form--input"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {showConfirmPassword ? (
            <FaEyeSlash
              className="password-icon"
              onClick={handleToggleConfirmPasswordVisibility}
            />
          ) : (
            <FaEye
              className="password-icon"
              onClick={handleToggleConfirmPasswordVisibility}
            />
          )}
        </div>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <button  style={{ width: '90%' }} className="form--submit" onClick={handleSignUp}>
        Salvar
      </button>
    </form>
  </div>
  
  );
};

export default Cadastro;
