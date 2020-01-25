const express = require("express");

const server = express();
server.use(express.json());

//query params = ?teste=1
//route params = /users/1
//request body = { "name": "Diego" }

//CRUD - Create, Read, Update, Delete

const users = ["Diego", "Icaro", "Cairo", "Lis"];

//lista todos users
server.get("/users", (req, res) => {
  return res.json(users);
});

//lista 1 user
server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

//criar usuario
server.post("/users", (req, res) => {
  const { name } = req.body;

  users.push(name);
  return res.json(users);
});

//editar 1 user
server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;
  return res.json(users);
});

//deletar 1 user
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);
  return res.send();
});

server.listen(3000);
