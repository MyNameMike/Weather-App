const fetch = require('node-fetch');

module.exports = (app) => {
    
    let lat;
    let long;

    app.post('/location', (req,res) => {

        lat = req.body.lat;
        long = req.body.long;

        if(!lat || !long || lat.length + long.length < 2) {
            res.redirect('/error');
        } else {
            res.redirect('/current-weather');
        }
    })

    app.get('/location-weather', (req,res) => {

        const baseUrl = 'https://api.darksky.net/forecast/'
        const apiId = 'f60dc77141aaaef7e2d01e7e688bb4e2/'

         const userLocation = (bUrl, aId, lat, long) => {
             let newUrl = bUrl + aId + lat + ',' + long;
             return newUrl;
         };

         const apiUrl = userLocation(baseUrl, apiId, lat, long);

         fetch(apiUrl)
         .then(res => res.json())
         .then(data => {
             res.send({data});
         })
         .catch(err => {
             res.redirect('/error');
         })
    })
}