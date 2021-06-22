const express = require('express');
const cors = require('cors');

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = './public';
server.use(express.static(staticServerPath));

// users

const users = []; // fake users data base

// api endpoints

server.post('/user', (req, res) => {
  console.log('Query params:', req.query);
  console.log('Query param userName:', req.query.userName);
  console.log('Query param userEmail:', req.query.userEmail);

  // add new user to daba base
  users.push({
    name: req.query.userName,
    email: req.query.userEmail
  });

  res.json({
    result: 'User created'
  });
});

server.get('/users', (req, res) => {
  
  console.log('Query param FilterByName:', req.query.filterByName);
  console.log('Query param FilterByEmail:', req.query.filterByEmail);
  const filterName = req.query.filterByName;
  const filterEmail = req.query.filterByEmail;

  const filteredUsers = users
  .filter((user) => {
    
    return filterName === "" ? true : user.name.toLowerCase().includes(filterName.toLowerCase());
  })
  .filter((user) => {
    
    return filterEmail === "" ? true : user.email.toLowerCase().includes(filterEmail.toLowerCase());
  });


  res.json({
    result: filteredUsers
  });
});