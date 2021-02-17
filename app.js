// imports
const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6f624bda74801caac6a7f957b71a677d&query=37.8267,-122.4233'

request({ url:url }, (error, response) => {
    const data = JSON.parse(response.body) // notice the response contains all the data held within the body is the url request
    console.log(data.current)  // print only the url req
})