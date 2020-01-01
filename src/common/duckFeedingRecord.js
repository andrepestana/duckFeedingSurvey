
export class DuckFeedingRecord {

    constructor(feedingDate, feedingTime, foodName, feedingLocation, numberOfDucks, foodType, foodQuantity) {

        DuckFeedingRecord.validateFeedingDate(feedingDate);
        DuckFeedingRecord.validateFeedingTime(feedingTime);
        DuckFeedingRecord.validateFoodName(foodName);
        DuckFeedingRecord.validateFeedingLocation(feedingLocation);
        DuckFeedingRecord.validateNumberOfDucks(numberOfDucks);
        DuckFeedingRecord.validateFoodType(foodType);
        DuckFeedingRecord.validateFoodQuantity(foodQuantity);
        
        this.feedingDate = feedingDate;
        this.feedingTime = feedingTime;
        this.foodName = foodName;
        this.feedingLocation = feedingLocation;
        this.numberOfDucks = numberOfDucks;
        this.foodType = foodType; 
        this.foodQuantity = foodQuantity; 
    }
    static validateFeedingDate(feedingDate) {
        if(Object.prototype.toString.call(feedingDate) !== '[object Date]') {
            throw new Error("Feeding Date must be a selected Date");
        }
    }
    static validateFeedingTime(feedingTime) {
        if(Object.prototype.toString.call(feedingTime) !== '[object Date]') {
            throw new Error("Feeding Time must be a selected Time");
        }
    }
    static validateFoodName(foodName) {
        if(typeof foodName !== 'string') {
            throw new Error("Food Name must be a string");
        } else if(foodName.length < 3 || foodName.length > 30) {
            throw new Error("Food Name must be a word from 3 to 30 characters");
        }
    }
    static validateFeedingLocation(feedingLocation) {
        if(typeof feedingLocation !== 'string') {
            throw new Error("Feeding Location must be a string");
        } else if(feedingLocation.length < 1 || feedingLocation.length > 30) {
            throw new Error("Feeding Location must be a word from 1 to 30 characters");
        }
    }
    static validateNumberOfDucks(numberOfDucks) {
        if(typeof numberOfDucks !== 'number') {
            throw new Error("Number of Ducks must be a number");
        }
        if(numberOfDucks < 1) {
            throw new Error("Number of Ducks must not be less than 1");
        } 
        //TODO prevent fraction
    }
    static validateFoodType(foodType) {
        if(typeof foodType !== 'string') {
            throw new Error("Food Type must be a string");
        } else if(foodType.length < 3|| foodType.length > 30) {
            throw new Error("Food Type must be a word from 3 to 30 characters");
        }
    }
    static validateFoodQuantity(foodQuantity) {
        if(typeof foodQuantity !== 'number') {
            throw new Error("Food Quantity must be a number");
        }
        if(foodQuantity < 0.001) {
            throw new Error("Food Quantity must greater than or equal to 0.001 kg");
        }
    }
  }