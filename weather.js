module.exports = class Weather {
    constructor(day, maxTemp, minTemp){
        this.day = day;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.spread = this.maxTemp - this.minTemp;
    }
}