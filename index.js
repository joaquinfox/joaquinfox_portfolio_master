const express = require('express');
const PORT = process.env.PORT;

express()
  .set('view engine', 'ejs')
  .use(express.static('public'))
  .get('/', (req, res) => {
    res.render('landing');
  })
  .get('/about', (req, res) => {
    res.render('about');
  })
  .get('/tech', (req, res) => {
    res.render('tech');
  })
  .get('/gallery', (req, res) => {
    res.render('gallery');
  })
  .listen(PORT || 3000, () => {
    console.log(`Listening on ${PORT || 3000}`);
  });
