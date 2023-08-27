import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from '../img/logo.png';
import axios from 'axios'; 
import './Login.Style.css';

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };


  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 

  const handleCadastrarClick = () => {
    navigate('/cadastrar');
  };

  const handleEntrarClick = async () => {
    try {
      localStorage.setItem('username', login);

      const response = await axios.post('http://localhost:3001/login', {
        username: login,
        password: password,
      });

      if (response.status === 200) {
         
        navigate('/home');
      } else {
        alert('Erro ao fazer login. Credenciais inválidas.');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao fazer login. Verifique a conexão com o servidor.');
    }
  };

  // Verificando se o usuário já marcou a opção "Gravar Senha" em acessos anteriores
  React.useEffect(() => {
    const rememberedLogin = localStorage.getItem('rememberedLogin');
    const rememberedPassword = localStorage.getItem('rememberedPassword');
    if (rememberedLogin && rememberedPassword) {
      setLogin(rememberedLogin);
      setPassword(rememberedPassword);
    }
  }, []);

  return (

    <div className='body'>
      
      <form className="form">
      
        <span className="signup">
        <img style={{ width: '50px', borderRadius: '50%', textAlign: 'center', justifyContent: 'center', }} src={logo} alt="logo" />
          Sign Up</span>
        <div className="input-div">
          <input
            className="form--input"
            type="text"
            value={login}
            onChange={handleLoginChange}
            placeholder="Login"
          />
  
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
        </div>
    
        <div className="btn-div">
          <button className="form--submit" onClick={handleEntrarClick}>
            Entrar
          </button>
          <button className="form--submit" onClick={handleCadastrarClick}>
            Cadastrar-se
          </button>
        </div>
      </form>
    </div>

  );
};

export default Login;
