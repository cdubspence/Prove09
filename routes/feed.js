const express = require('express');
const app = express();
const feedControler = require('../controllers/feed');


app.get('/', (req, res, next) => {
    res.render('HomePage');
})
.get('/pokemon/:page', (req, res, next) => {
    const page = req.params.page;
    feedControler.getPokemon(page, (pokemon) => {
        res.render('pokemon', {
            pokemonList: pokemon,
            page: page
        });
    });
});

module.exports = app;