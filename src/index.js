const chalk = require("chalk")
const city = require("cities")

console.log(chalk.bgRed("Hello YSE!!"))
console.log(chalk.green("Hello YSE!!"))

let lat = process.argv[2]
let lng = process.argv[3]

const cities = require("cities")
if (lat && lng) {
    let city = cities.gps_lookup(lat,lng)
    console.log(city)
}