const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// init and config data base
const db = new Database('./src/database.db', {
  // this line log in console all data base queries
  verbose: console.log
});

// api endpoints

app.get('/all-articles', (req, res) => {
  const query = db.prepare(`SELECT * FROM articles`);
  const articles = query.all();
  res.json(articles);
});

app.get('/article-2', (req, res) => {
  const query = db.prepare(`SELECT * FROM articles WHERE id = ?`);
  const articles = query.get(2);
  res.json(articles);
});


app.get('/articles-with-title-datos', (req, res) => {
  const query = db.prepare(`SELECT * FROM articles WHERE title LIKE '%datos%'`);
  const articles = query.all();
  res.json(articles);
});