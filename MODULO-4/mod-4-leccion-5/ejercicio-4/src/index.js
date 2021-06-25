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

app.get('/all-books-sorted-by-price', (req, res) => {
  const query = db.prepare(`SELECT * FROM books ORDER BY price ASC`);
  const books = query.all();
  res.json(books);
});

app.get('/all-books-price-sup-5', (req, res) => {
  const query = db.prepare(`SELECT * FROM books WHERE price > 5`);
  const books = query.all();
  res.json(books);
});


app.get('/books-in-stock', (req, res) => {
  const query = db.prepare(`SELECT * FROM books WHERE stock > 0`);
  const books = query.all();
  res.json(books);
});


app.get('/book-id-1', (req, res) => {
  const query = db.prepare(`SELECT * FROM books WHERE id = 1`);
  const books = query.get();
  res.json(books);
});