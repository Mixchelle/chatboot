import React, { useState, useEffect } from 'react';
import responses from './chatbotResponses'; 
import Header from './Header';
import { IoIosMicrophone } from 'react-icons/io';
import userImage from '../img/user.png'; 
import botImage from '../img/atendente.jpeg';   

import './Home.css';

const Home = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (!username) {
      const loginMessage = "You must log in to continue.";
      const botLoginMessage = { user: false, text: loginMessage };
      setConversation((prevConversation) => [...prevConversation, botLoginMessage]);
      return;
    }

    if (message.trim() === '') {
      return;
    }

    const userMessage = { user: true, text: message };
    setConversation((prevConversation) => [...prevConversation, userMessage]);
    setMessage('');

    const botResponse = getResponse(message);
    const botMessage = { user: false, text: botResponse };
    setConversation((prevConversation) => [...prevConversation, botMessage]);
  };

  function normalizeText(text) {
    return text
      .toLowerCase() 
      .normalize('NFD') 
      .replace(/[\u0300-\u036f]/g, ''); 
  }
  
  function findResponse(keyword) {
    const normalizedKeyword = normalizeText(keyword);
    return responses.find(response => {
      const normalizedResponseKeyword = normalizeText(response.keyword);
      return normalizedResponseKeyword.includes(normalizedKeyword);
    });
  }
  
  const getResponse = (message) => {
    const matchedResponse = findResponse(message);
    return matchedResponse ? matchedResponse.text : 'I\'m sorry, I didn\'t understand that.';
  };

  return (
     <div><Header />
    
    <div className="chat-container">
 
      <div className="user-info">
        {username ? (
          <p>Welcome, {username}!</p>
        ) : (
          <p>Please log in to continue.</p>
        )}
      </div>
      <div className="chat-messages">
          {conversation.map((msg, index) => (
     <div key={index} className={`chat-message ${msg.user ? 'user-message' : 'bot-message'}`}>
     {msg.user ? (
       <img className="message-image user-image" src={userImage} alt="User" />
     ) : (
       <img className="message-image bot-image" src={botImage} alt="Bot" />
     )}
     <div className="message-text">
      <p> {msg.text}</p>
      </div>
   </div>
          ))}
        </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
     
    </div>
    </div>
  );
};

export default Home;
