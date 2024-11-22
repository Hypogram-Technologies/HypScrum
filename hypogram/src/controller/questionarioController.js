const {
  listarQuestionarios,
  listarItensQuestionario,
} = require("../models/questionarioModel");
const pool = require("../database/pgslq");

const renderQuestionarios = async (req, res) => {
  try {
    const questionarios = await listarQuestionarios();
    res.render("selecaoQuestionarios", { questionarios });
  } catch (err) {
    console.error("Erro ao renderizar questionários:", err.message);
    res.status(500).send("Erro ao carregar a página de questionários.");
  }
};

const listaritensquestionario = async (req, res) => {
  const { questionarioId } = req.params;

  try {
    const questionario = await listarItensQuestionario(questionarioId);

    if (!questionario) {
      console.error("Nenhum questionário encontrado.");
      return res.status(404).send("Questionário não encontrado.");
    }

    req.session.questionario = questionario;
    console.log("Questionário:", questionario);

    res.render("questionario", { dadosQuestionario: questionario });
  } catch (err) {
    console.error("Erro ao buscar os itens do questionário:", err);
    res.status(500).json({ error: "Erro ao buscar os itens do questionário." });
  }
};

module.exports = {
  renderQuestionarios,
  listaritensquestionario,
};
