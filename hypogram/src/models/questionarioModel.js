const pool = require("../database/pgslq");

const listarQuestionarios = async (req, res) => {
  try {
    const query = `SELECT * FROM questionario ORDER BY questionarioordem`;
    const result = await pool.query(query);

    return result.rows;
  } catch (err) {
    console.error(err);
    throw new Error("Erro ao buscar os questionários no banco de dados.");
  }
};

const listarItensQuestionario = async (questionarioId) => {
  try {
    const query = `
      SELECT 
        q.questionarioid AS id,
        q.questionariotitulo AS titulo,
        qi.questionarioitemid AS itemId,
        qi.questionarioitemconteudo AS conteudo,
        qi.questionarioitemrespostacorret AS respostaCorreta
      FROM 
        questionario q
      INNER JOIN 
        questionarioitem qi
      ON 
        q.questionarioid = qi.questionarioid
      WHERE 
        q.questionarioid = $1
    `;

    const result = await pool.query(query, [questionarioId]);
    console.log("Resultado da consulta:", result.rows);

    if (result.rows.length === 0) {
      return null; // Caso o questionário não exista
    }

    // Estrutura o objeto conforme o esperado
    const questionario = {
      id: result.rows[0].id,
      titulo: result.rows[0].titulo,
      questoes: result.rows.map((row) => ({
        id: row.itemid,
        conteudo: row.conteudo,
        respostaCorreta: row.respostacorreta,
      })),
    };

    return questionario;
  } catch (err) {
    console.error(err);
    throw new Error(
      "Erro ao buscar os itens do questionário no banco de dados."
    );
  }
};

module.exports = {
  listarQuestionarios,
  listarItensQuestionario,
};
