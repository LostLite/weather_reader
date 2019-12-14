const fs = require('fs');
const readline = require('readline');
const Weather =  require('./weather');
const weatherObjectsList = [];

/**
 * Using the readline and fs native modules, create the object that will read
 * from the stream (provided by fs)
 */
const readInterface = readline.createInterface({
    input: fs.createReadStream('weather.dat.txt'),
    console: false
});

/**
 * This method takes an weather record and populates the 
 * weather objects list with a new Weather object
 * @param {*} item 
 */
const registerWeather = item => {
    if(item[0] && item[0] !== 'Dy' & item[0] !== 'mo'){
        weatherObjectsList.push(new Weather(parseInt(item[0]), parseInt(item[1]), parseInt(item[2])));
    }
}

const processData = callback => {
    /**
     * Read file line by line
     */
    readInterface.on('line', line => {
        registerWeather(line.split(' ').filter(value => value !==''))
    }).on('close', ()=>{
        /**
         * execute callback function
         */
        callback();
    });

}

/**
 * Execute program
 */
processData(() => {
    const maxSpread = weatherObjectsList.sort((a,b) => {
        return b.spread - a.spread;
    })[0];
    console.log(maxSpread.day, maxSpread.spread);
});







