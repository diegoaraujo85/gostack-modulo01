const express = require("express");

const server = express();

//query params = ?teste=1
//route params = /users/1
//request body = { "name": "Diego" }

server.get("/teste", (req, res) => {
  // localhost:3000/teste?nome=Diego
  const nome = req.query.nome;

  return res.json({ message: `Hello ${nome}` });
});

server.listen(3000);
