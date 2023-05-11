const { getTemperaments } = require("../func/temperament.functions.js");
const { Temperament } = require("../db.js");

const createTemperaments = async (req, res) => {
    try {
        const allTemperament = await getTemperaments();

        allTemperament.forEach((e) => {
            if(e != ""){
                Temperament.findOrCreate({
                    where: {
                        name: e
                    }
                })
            }
        })

        res.status(200).json(allTemperament)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = { createTemperaments }