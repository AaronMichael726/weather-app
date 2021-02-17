// imports
const request = require('request')

const url = 'http://api.weatherstack.com/forecast?access_key=6f624bda74801caac6a7f957b71a677d&query=37.8267,-122.4233&units=f'

// request({ url:url, json: true }, (error, response) => {
//     console.log(response.body.current)
// })

/**
 * Challenge: Print a small forecast to the user
 * 
 * 1. Print "It is currentl 9 degrees out. It feels like 5 degrees out. "
 * 2. test!
 */



request({
    url, 
    json: true
}, (error, response) => {
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees outside`)
})  // optimization notes, could convert to F from C