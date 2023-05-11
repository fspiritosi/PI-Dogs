const {getDogsApi} = require('./dog.functions.js')

const getTemperaments = async () => {
    const apiData = await getDogsApi()
    const allTemperament = apiData.map(dog => {return dog.temperament})
    
    let splitedTemperament = allTemperament.map((ele) => {
        if(ele == null) return "";
        return ele.split(", ")
    }).flat()
    
    let orderTemperament = splitedTemperament.sort()

    let reduceTemperament = []

    orderTemperament.forEach((ele) => {
        if(reduceTemperament.indexOf(ele) === -1){
            reduceTemperament.push(ele)
        }
    })

    return reduceTemperament;
}

module.exports = {
    getTemperaments
}