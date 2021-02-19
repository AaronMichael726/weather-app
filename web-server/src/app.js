const path = require('path') // core node module no need to install
const express = require('express')
const hbs = require('hbs')
const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')

const app = express()
const port = process.env.PORT || 3000

//paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// middleware
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve 
app.use(express.static(publicDirectoryPath)) // static takes the path we want to use


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Aaorn Hernandez'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Aaron Hernandez'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help', 
        name: 'Aaorn Hernandez',
        helpText: 'Here is a message that should help you along the way'
    })
})

app.get('/weather', (req, res) => {

    if(!req.query.address){
        return res.send({
            error: 'You must provide and address'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location} = {}) => {
        if(error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData, 
                location,
                address: req.query.address     
            })
        })
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    req.query

    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Aaorn Hernandez',
        errorMessage:'Help article not found'
    })
})

app.get('*', (req, res) => { // wild card to select every page that is not defined
    res.render('404', {
        title: '404',
        name: 'Aaorn Hernandez',
        errorMessage:'page not found'
    })
})



app.listen(3000, () => {
    console.log(`SErver is running on PORT: ${port}`)
})