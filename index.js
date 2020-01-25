const express = require("express");

const server = express();
server.use(express.json());

//query params = ?teste=1
//route params = /users/1
//request body = { "name": "Diego" }

//CRUD - Create, Read, Update, Delete

const users = ["Diego", "Icaro", "Cairo", "Lis"];

server.use((req, res, next) => {
  console.time("Request");
  console.log(`Método: ${req.method}; URL: ${req.url}`);

  next();

  console.timeEnd("Request");
});

function checkUSerExists(req, res, next){
  if(!req.body.name){
    return res.status(400).json({error: 'User name is required'});
  }

  return next();
}

function checkUSerInArray(req, res, next){
  const user = users[req.params.index];
  if(!user){
    return res.status(400).json({error:'User does not exists'})
  }

  req.user = user;

  return next();
}

//lista todos users
server.get("/users", (req, res) => {
  return res.json(users);
});

//lista 1 user
server.get("/users/:index",checkUSerInArray, (req, res) => {
  return res.json(req.user);
});

//criar usuario
server.post("/users",checkUSerExists, (req, res) => {
  const { name } = req.body;

  users.push(name);
  
  return res.json(users);
});

//editar 1 user
server.put("/users/:index",checkUSerExists,checkUSerInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;
  return res.json(users);
});

//deletar 1 user
server.delete("/users/:index",checkUSerInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);
  return res.send();
});

server.listen(3000);
