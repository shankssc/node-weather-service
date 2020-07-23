const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + encodeURIComponent(lat) + '&' + 'lon=' + encodeURIComponent(long) + '&units=metric&appid=8d5aa010972509aca7210a1ebee163ce'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the forecasting services!', undefined)
        } else if (body.error) {
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined, 'It is currently '+ body.main.temp + ' degrees out there')
        }
    })
}

module.exports = forecast;