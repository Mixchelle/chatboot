// controllers/chatController.js
const { Response } = require('../models');

async function processMessage(req, res) {
  const { message } = req.body;
  
  try {
    // Processar a mensagem e buscar resposta no banco de dados
    const response = await Response.findOne({ keyword: message });
    
    if (response) {
      return res.status(200).json({ reply: response.text });
    } else {
      return res.status(200).json({ reply: "'I'm sorry, I couldn't understand that." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
}

module.exports = {
  processMessage,
};
