// imports
const request = require('request')
const geocode = require('./utils/geocode')

const url = 'http://api.weatherstack.com/forecast?access_key=6f624bda74801caac6a7f957b71a677d&query=37.8267,-122.4233&units=f'
// request({ url:url, json: true }, (error, response) => {
//     console.log(response.body.current)
// })

// request({
//     url, 
//     json: true
// }, (error, response) => {
//     if (error){
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error){
//         console.log('Unable to find location')
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees outside`)
//     }
    
// })  

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})