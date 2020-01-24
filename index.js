const express = require("express");

const server = express();

//query params = ?teste=1
//route params = /users/1
//request body = { "name": "Diego" }

server.get("/teste", (req, res) => {
  return res.json({ message: `Hello World` });
});

server.listen(3000);
