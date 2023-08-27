const Sequelize = require('sequelize');
const dbConfig = require('./config'); 


const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',  // Usando o nome do serviço definido no Docker Compose
  port: 3306,     // Porta padrão do MySQL
  username: 'root',
  password: '123456',  // Use a senha configurada na variável MYSQL_ROOT_PASSWORD
  database: 'chatbot_database',  // Use o nome da base de dados configurado na variável MYSQL_DATABASE
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
