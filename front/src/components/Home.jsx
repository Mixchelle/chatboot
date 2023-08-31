import React, { useState, useEffect } from 'react';
import responses from './chatbotResponses'; 
import Header from './Header';
import userImage from '../img/user.png'; 
import botImage from '../img/atendente.jpeg';   

import './Home.css';

const Home = () => {
  const [message, setMessage] = useState('Get Start');
  const [conversation, setConversation] = useState([]);
  const [username, setUsername] = useState('');
  const [chatFinished, setChatFinished] = useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFinishChat = () => {
    if (conversation.length > 0) {
      const endChatMessage = "Chat ended.";
      const botEndChatMessage = { user: false, text: endChatMessage };
      setConversation((prevConversation) => [...prevConversation, botEndChatMessage]);
      if (username) {
        saveConversationToLocalStorage(conversation, username);
      }
    }
    setChatFinished(true);
  };

  const exportConversation = () => {
    const savedConversations = JSON.parse(localStorage.getItem('savedConversations')) || [];
  
    const conversationText = savedConversations.map((conversationObj, index) => {
      const formattedDate = new Date(conversationObj.date).toLocaleString();
      const conversationLines = conversationObj.conversation.map(msg => `[${msg.user ? 'User' : 'Bot'}][${formattedDate}] ${msg.text}`).join('\n');
      return `Conversation ${index + 1}:\n${conversationLines}\n\n`;
    }).join('\n');
  
    const blob = new Blob([conversationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'conversation.txt';
    a.click();
    URL.revokeObjectURL(url);
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

  const saveConversationToLocalStorage = (conversation, username) => {
    const savedConversations = JSON.parse(localStorage.getItem('savedConversations')) || [];
    const currentConversation = { username, conversation, date: new Date().toISOString() };
    savedConversations.push(currentConversation);
    localStorage.setItem('savedConversations', JSON.stringify(savedConversations));
  };

const normalizeText = (text) => {
    return text
      .toLowerCase() 
      .normalize('NFD') 
      .replace(/[\u0300-\u036f]/g, ''); 
  }
  
  const findResponse = (message) => {
    const normalizedMessage = normalizeText(message);
    for (const response of responses) {
      for (const keyword of response.keywords) {
        if (normalizedMessage.includes(keyword)) {
          return response.text;
        }
      }
    }
    return getDefaultResponse();
  }
  
  const getDefaultResponse = () => {
    return "I'm sorry, I didn't understand that. How can I assist you today? ";
  }
  
  const getResponse = (message) => {
    const botResponse = findResponse(message);
    return botResponse;
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
  {chatFinished ? (
    <>

      <button onClick={exportConversation}>Export Conversation</button>
     
    </>
  ) : (
    <>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
      <button onClick={handleFinishChat}>Finish Chat</button>
    </>
  )}
</div>
     
    </div>
    </div>
  );
};

export default Home;
