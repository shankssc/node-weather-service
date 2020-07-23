const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2hhbmtzc2MiLCJhIjoiY2tjZXJ6ajYzMDhmNDJ0cDBnc3F1Zm1mYSJ9.EKobA8xyJiclb9GqessJAQ&limit=1'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the location services!',undefined)
        } else if(body.features.length === 0) {
            callback('Please enter a correct location', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;