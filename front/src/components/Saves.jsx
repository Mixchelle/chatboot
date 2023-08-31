import React, { useState, useEffect } from 'react';
import Header from './Header';
import { FaDownload } from 'react-icons/fa';
import './Saves.css';


const ConversationHistory = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const savedConversations = JSON.parse(localStorage.getItem('savedConversations')) || [];
    setConversations(savedConversations);
  }, []);

  const downloadConversation = (conversation) => {
    const formattedDate = new Date(conversation.date).toLocaleString();
    const conversationText = conversation.conversation.map(msg => `[${msg.user ? 'User' : 'Bot'}][${formattedDate}] ${msg.text}`).join('\n');
    
    const blob = new Blob([conversationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `conversation_${conversation.username}_${formattedDate}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div><Header />
    <div className="conversation-history">
      <h2>Conversation History</h2>
      {conversations.map((conversation, index) => (
        <div key={index} className="conversation-item">
        <p>User: {conversation.username}</p>
        <p>Date: {new Date(conversation.date).toLocaleString()}</p>
        <button onClick={() => downloadConversation(conversation)}>
          <FaDownload /> Download Conversation
        </button>
      </div>
      ))}
    </div>
   </div>
  );
};

export default ConversationHistory;
