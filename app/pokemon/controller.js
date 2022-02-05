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
    },
    releasePokemon: async (req, res) => {
        // Range number from 1 - 100
        number = Math.floor(Math.random() * 101);

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return res.status(200).json({
                    code: "not_released",
                    message: "Sorry failed to release this pokemon, please try it again"
                });
            }
        }

        return res.status(200).json({
            code: "released",
            message: "Pokemon released"
        });
    }
}
