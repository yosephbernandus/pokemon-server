
var express = require('express');
var router = express.Router();
const { catchPokemon, releasePokemon } = require('./controller');


router.post('/catch', catchPokemon);
router.post('/released', releasePokemon);


module.exports = router;
