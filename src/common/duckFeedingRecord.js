
export class DuckFeedingRecord {

    constructor(feedingTime, foodName, feedingLocation, numberOfDucks, foodType, foodQuantity) {

        if(Object.prototype.toString.call(feedingTime) !== '[object Date]') {
            throw new Error("feedingTime must be a Date");
        }
        if(typeof foodName !== 'string') {
            throw new Error("foodName must be a string");
        }
        if(typeof feedingLocation !== 'string') {
            throw new Error("feedingLocation must be a string");
        }
        if(typeof numberOfDucks !== 'number') {
            throw new Error("numberOfDucks must be a number");
        }
        if(numberOfDucks === 0) {
            throw new Error("numberOfDucks must not be zero");
        }
        if(typeof foodType !== 'string') {
            throw new Error("foodType must be a string");
        }
        if(typeof foodQuantity !== 'number') {
            throw new Error("foodQuantity must be a number");
        }
        this.feedingTime = feedingTime;
        this.foodName = foodName;
        this.feedingLocation = feedingLocation;
        this.numberOfDucks = numberOfDucks;
        this.foodType = foodType; 
        this.foodQuantity = foodQuantity; 
    }
    
  }