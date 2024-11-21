const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

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

const criarUsuario = async (req, res) => {
  const { nome, email, senha, status } = req.body;
  console.log("Tentando criar usuário com email:", email); // Log de entrada do email

  try {
    // Cria o usuário no banco de dados
    const usuario = await userModel.criarUsuario(nome, email, senha, status);
    console.log("Usuário criado com sucesso:", usuario);
    return res.render("login", { mensagem: "Usuário criado com sucesso." });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return res.render("erro", { mensagem: "Erro interno do servidor." });
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
      return res.render("login", {
        erro: "E-mail ou senha incorretos.",
      });
    }

    req.session.usuarioLogado = usuario; //Salvando os dados do usuário logado na sessão

    console.log(req.session.usuarioLogado)

    console.log("Login realizado com sucesso.");

    /* localStorage.setItem("usuarioLogado", JSON.stringify(usuario)); */
    return res.render("aprendaScrum", {
      mensagem: "Login realizado com sucesso.",
    });
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
