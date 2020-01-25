const express = require("express");

const server = express();

//query params = ?teste=1
//route params = /users/1
//request body = { "name": "Diego" }

const users = ["Diego", "Icaro", "Cairo"]

server.get("/users/:index", (req, res) => {
  // localhost:3000/users/1
  //antes
  //const id = req.params.id;
  //depois da desestruturação
  const { index } = req.params;

  return res.json(users[index]);
});

server.listen(3000);
