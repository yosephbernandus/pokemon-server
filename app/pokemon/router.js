
var express = require('express');
var router = express.Router();
const { catchPokemon, releasePokemon, renamePokemon } = require('./controller');


router.post('/catch', catchPokemon);
router.post('/released', releasePokemon);
router.post('/rename', renamePokemon);


module.exports = router;
