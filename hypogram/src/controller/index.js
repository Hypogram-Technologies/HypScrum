const pool = require("./pgslq");

async function getUsers(req, res) {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
}

module.exports = { getUsers };
