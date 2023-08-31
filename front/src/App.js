import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Home from './components/Home';
import ConversationHistory from './components/Saves'
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ConversationHistory" element={<ConversationHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
