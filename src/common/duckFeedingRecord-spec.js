import { DuckFeedingRecord } from './duckFeedingRecord.js';

describe('DuckFeedingRecord', function () {

//   var duckFeedingRecord;
//   beforeEach(function () {
//     duckFeedingRecord = new DuckFeedingRecord(new Date(), 'Corn', 'Victoria BC', 10, 'Grains', 1);
//   });

  it('should be initiated with a feedingTime as a Date', function () {
    expect(function () { new DuckFeedingRecord("test", 'Corn', 'Victoria BC', 10, 'Grains', 1); }).toThrowError("feedingTime must be a Date");
  });

  it('should be initiated with a foodName as a string', function () {
    expect(function () { new DuckFeedingRecord(new Date(), 9, 'Victoria BC', 10, 'Grains', 1); }).toThrowError("foodName must be a string");
  });

  it('should be initiated with a feedingLocation as a string', function () {
    expect(function () { new DuckFeedingRecord(new Date(), 'Corn', 5, 10, 'Grains', 1); }).toThrowError("feedingLocation must be a string");
  });
  
  it('should be initiated with a numberOfDucks as a number', function () {
    expect(function () { new DuckFeedingRecord(new Date(), 'Corn', 'Victoria BC', 'a', 'Grains', 1); }).toThrowError("numberOfDucks must be a number");
  });

  it('should be initiated with a numberOfDucks not zero', function () {
    expect(function () { new DuckFeedingRecord(new Date(), 'Corn', 'Victoria BC', 0, 'Grains', 1); }).toThrowError("numberOfDucks must not be zero");
  });

  it('should be initiated with a foodType as a string', function () {
    expect(function () { new DuckFeedingRecord(new Date(), 'Corn', 'Victoria BC', 10, 7, 1); }).toThrowError("foodType must be a string");
  });

  it('should be initiated with a foodQuantity as a number', function () {
    expect(function () { new DuckFeedingRecord(new Date(), 'Corn', 'Victoria BC', 10, 'Grains', '1'); }).toThrowError("foodQuantity must be a number");
  });

});