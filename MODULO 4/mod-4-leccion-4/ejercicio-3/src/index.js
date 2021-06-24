const express = require('express');
const cors = require('cors');
const films = require('./films-data.json');

// create app server
const app = express();

// set express middlewares
app.use(express.json());
app.use(cors());

// set template engine middlewares
app.set('view engine', 'ejs');

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints

app.get('/es/film:filmId.html', (req, res) => {
  // get film data
  const filmData = films.find(film => film.id === req.params.filmId);

  // response with rendered template
  if (filmData) {
    // ensure data
    const film = {};
    film.title = filmData.title || '';
    film.year = filmData.year || '';
    film.director = filmData.director || '';
    film.country = filmData.country || '';
    film.awards = filmData.awards || [];
    film.awards = filmData.awards.filter(award => award.year === req.query.adwarsYear);
    res.render('pages/film', film);
  } else {
    res.render('pages/film-not-found');
  }
});
