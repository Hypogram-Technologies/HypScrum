const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const criarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  const status = "ativo";

  try {
    // Criptografando a senha antes de armazenar no banco
    const hashedSenha = await bcrypt.hash(senha, 10);

    // Chama o método para criar o usuário com a senha criptografada
    await userModel.criarUsuario(nome, email, hashedSenha, status);

    // Redireciona para a página de login após a criação
    return res.redirect("/login");
  } catch (error) {
    console.error(error);
    // Renderiza a página de erro ou envia uma mensagem de erro
    return res.render("erro", {
      mensagem: "Erro ao criar usuário. Tente novamente.",
    });
  }
};

const buscarUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await userModel.buscarUsuarioPorId(id);
    return res.json(usuario); // Retorna o usuário em formato JSON
  } catch (error) {
    console.error(error);
    return res.status(500).send("Erro ao buscar usuário");
  }
};

const loginUser = async (req, res) => {
  const { email, senha } = req.body;
  console.log("Tentando fazer login com email:", email); // Log de entrada do email
  console.log("Senha digitada:", senha); // Log de entrada da senha

  try {
    // Buscar o usuário pelo e-mail no banco
    const usuario = await userModel.buscarUsuarioPorEmail(email);

    if (!usuario) {
      console.log("Usuário não encontrado.");
      // Envia uma mensagem de erro para a página de login
      return res.render("login", { erro: "Usuário não encontrado." });
    }

    console.log("Hash da senha armazenada:", usuario.usuariosenha);

    // Verifica se a senha está correta
    const isPasswordCorrect = await bcrypt.compare(senha, usuario.usuariosenha);

    if (!isPasswordCorrect) {
      console.log("Senha incorreta.");
      // Envia uma mensagem de erro para a página de login
      return res.render("login", { erro: "E-mail ou senha incorretos." });
    }

    console.log("Login bem-sucedido.");
    // Renderiza a página de destino após o login
    return res.render("aprendaScrum"); // Substitua por sua página de destino
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    // Renderiza a página de erro se houver erro no login
    return res.render("erro", { mensagem: "Erro interno do servidor." });
  }
};

module.exports = {
  criarUsuario,
  buscarUsuarioPorId,
  loginUser,
};
