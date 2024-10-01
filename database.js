const mysql = require('mysql2')

const pool = mysql.createPool({
  host: '200.9.22.2',
  user: 'senai-dev',
  password: 'mensagemapagada99',
  database: 'senai-dev',
  waitForConnections: true,   // Espera por conexões disponíveis
  connectionLimit: 10,        // Limite máximo de conexões no pool
  queueLimit: 0               // Número máximo de conexões em espera (0 = ilimitado)
})

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting: ' + err.stack)
    return
  }
  console.log('Connected as id ' + connection.threadId)

  // Libera a conexão de volta para o pool após o uso
  connection.release()
})

module.exports = pool