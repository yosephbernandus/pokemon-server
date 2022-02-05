module.exports = {
    catchPokemon: async (req, res) => {

        number = Math.random();
        if (number <= 0.5) {
            res.status(200).json({
                code: "catched",
                message: "Catched !, You got this pokemon"
            });
        } else {
            res.status(200).json({
                code: "not_catched",
                message: "Sorry failed to catched this pokemon, please try it again"
            });
        }
    } 
}