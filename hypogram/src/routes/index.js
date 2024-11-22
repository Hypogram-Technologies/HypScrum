const express = require("express");
const router = express.Router();
const pageController = require("../controller/pageController");
const userController = require("../controller/userController");
const questionarioController = require("../controller/questionarioController");

router.get("/:page", pageController.renderPage);

const autenticarUsuario = (req, res, next) => {
  if (!req.session.usuarioLogado) {
    return res.redirect("/login"); // Redireciona para a página de login
  }
  next();
};

router.get("/api/sessao", (req, res) => {
  if (req.session.usuarioLogado) {
    return res.json({ logado: true, usuario: req.session.usuarioLogado });
  }
  return res.json({ logado: false });
});

router.post("/api/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Erro ao encerrar sessão:", err);
      return res.status(500).send("Erro ao encerrar sessão");
    }
    res.clearCookie("connect.sid");
    return res.status(200).send("Sessão encerrada com sucesso");
  });
});

router.post("/criarUsuario", userController.criarUsuario);

router.post("/loginUser", userController.loginUser);

router.get(
  "/questionario/:questionarioId",
  questionarioController.listaritensquestionario
);

router.post(
  "/questionario/:id/enviar",
  autenticarUsuario,
  questionarioController.salvarRespostas
);

// router.get("/certificado", questionarioController.gerarCertificado);

module.exports = router;
