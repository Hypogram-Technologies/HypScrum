const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));

// app.use("/styles", express.static("public/styles"));
// app.use("/scripts", express.static("public/scripts"));
// app.use("/imgs", express.static("public/imgs"));
// app.use("/components", express.static("public/components"));

app.use(routes);

// app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
