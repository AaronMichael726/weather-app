// imports
const request = require('request')

const url = 'http://api.weatherstack.com/forecast?access_key=6f624bda74801caac6a7f957b71a677d&query=37.8267,-122.4233&units=f'
'
// request({ url:url, json: true }, (error, response) => {
//     console.log(response.body.current)
// })

request({
    url, 
    json: true
}, (error, response) => {
    if (error){
        console.log('Unable to connect to weather service!')
    } else if (response.body.error){
        console.log('Unable to find location')
    } else {
        console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees outside`)
    }
    
})  // optimization notes, could convert to F from C

// Geocoding to get the right weather
// Address -> lat/long -> weather

const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWFyb25taWNoYWVsNzIiLCJhIjoiY2tsOXphODRrMnRlNzJ1dDdpejZ5OWllciJ9.NPGiSjwW1w6_mHamQ4Q51g&limit=1"

request({
    url: mapBoxUrl,
    json: true
}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search')
    
    }else {
        const lat = response.body.features[0].center[1]
        const long = response.body.features[0].center[0]

        console.log(`Lat: ${lat}`)
        console.log(`Long: ${long}`)
    }      
})


