const express = require('express');
const cors = require('cors');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints, more info about express response: https://expressjs.com/es/api.html#res

app.get('/response-a', (req, res) => {
  res.json({ result: 'ok' });
});

app.get('/response-b', (req, res) => {
  
  const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Express</title>
        <link rel="stylesheet" href="http://beta.adalab.es/resources/stylesheets/all.css" >
      </head>
      <body class="page">
        <header>
          <h1>Esta es una página de prueba</h1>
        </header>
      </body>
    </html>`;
  res.send(htmlCode);
});

app.get('/response-c', (req, res) => {
  const randomNumber= Math.floor(Math.random()*10);
  if(randomNumber %2 ===0 ){
    res.redirect('https://youtube.es');
  }else{
    res.redirect('https://instagram.es');
  }
  
});


app.get('/response-d', (req, res) => {
  // more info about http status codes: https://developer.mozilla.org/es/docs/Web/HTTP/Status
  res.status(404).json({
    errorCode: 'data-not-found',
    errorMessage: 'Data not found'
  });
  // another way to do it is:
  // res.status(404);
  // res.json({
  //   errorCode: 'data-not-found',
  //   errorMessage: 'Data not found'
  // });
});