
var express = require('express');
var router = express.Router();
const { catchPokemon } = require('./controller');


router.post('/catch', catchPokemon);


module.exports = router;
