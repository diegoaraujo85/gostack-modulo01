const express = require("express");

const server = express();

//query params = ?teste=1
//route params = /users/1
//request body = { "name": "Diego" }

server.get("/users/:id", (req, res) => {
  // localhost:3000/users/1
  const id = req.params.id;

  return res.json({ message: `Buscando o usuário ${id}` });
});

server.listen(3000);
