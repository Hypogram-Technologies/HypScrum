const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("index");
});

routes.get("/aprendaScrum", (req, res) => {
  res.render("aprendaScrum");
});

routes.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

routes.get("/sobre", (req, res) => {
  res.render("sobre");
});

routes.get("/selecaoQuestionario", (req, res) => {
  res.render("selecaoQuestionario");
});

routes.get("/preCertificado", (req, res) => {
  res.render("preCertificado");
});

routes.get("/questionario", (req, res) => {
  res.render("questionario");
});

routes.get("/login", (req, res) => {
  res.render("login");
});
module.exports = routes;
