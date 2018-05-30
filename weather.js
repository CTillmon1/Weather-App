const https = require('https'); 
const api = require('./api.json');

// Print out temp details
function printWeather(weather) {
    const message = `Current temperature in ${weather.location.city} is ${weather.current_observation.temp_f}F`;
    console.log(message);
}
// Print out error message

function get(query) {
    const request = https.get(`https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json`, response => {
        let body = "";
        // Read the data
        response.on('data', chunk => {
            body += chunk;
        });
        response.on('end', () => {
            try {
                const w = JSON.parse(body);
                // Print the data
                printWeather(w);
                //Print the data
                }
            catch(error) {console.log(error.message);}
        });
    });
}

module.exports.get = get;

//TODO: Handle any errors