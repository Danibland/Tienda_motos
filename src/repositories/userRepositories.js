
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tienda_de_motos",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const promisePool = pool.promise();

class UserRepository {
  async findByDocumentNumber(Id) {
    console.log(Id);

    const [rows] = await promisePool.query(
      "SELECT * FROM usuarios WHERE id = ?",
      [Id]
    );
    return rows.length > 0 ? rows[0] : null;
  }
  async findByUsername(usuario) {

    const [rows] = await promisePool.query(
      "SELECT * FROM users WHERE usuario = ?",
      [usuario]
    );
    return rows.length > 0 ? rows[0] : null;
  }

  async createUser(user) {
    const {
      nombre_completo,
      Id,
      email,
      usuario,
      password,
    } = user;
    try {
      const [result] = await promisePool.query(
        'CALL registrar_usuario(?, ?, ?, ?, ?)',
        [
            nombre_completo,
            Id,
            email,
            usuario,
            password,
        ]
      );
      return { id: result.insertId, ...user };
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = new UserRepository();
