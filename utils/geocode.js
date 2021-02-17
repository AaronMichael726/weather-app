const request = require('request')

const geocode = (address, callback) => {
    const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYWFyb25taWNoYWVsNzIiLCJhIjoiY2tsOXphODRrMnRlNzJ1dDdpejZ5OWllciJ9.NPGiSjwW1w6_mHamQ4Q51g&limit=1"

    request ({
        url: mapBoxUrl,
        json: true
    }, (error, response) => {

        if(error) { 
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else { 
            callback(undefined, {
                latittude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode