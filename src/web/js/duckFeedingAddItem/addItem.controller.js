import { DuckFeedingRecord } from "../../../common/duckFeedingRecord";
import addItemService from "../services/addItem.service";

export default class AddItemController {
    constructor($scope, $log, addItemService) {
      this.$scope = $scope;
      this.datePicker = initiDatePicker();
      this.timepicker = initTimePicker();
      this.foodName = '';
      this.feedingLocation = '';
      this.numberOfDucks = 1;
      this.foodType = '';
      this.foodQuantity = 0;
      this.addItemService = addItemService;
    }
    
    submit(form) {
      console.log('submitting....');
      console.log(this.addItemService);
      try {
        DuckFeedingRecord.validateFeedingDate(this.datepicker.dt);
      } catch(e) {
        form.datepicker.$setValidity('invalid', false);
        this.datepicker_validationMessage = e; 
      }

      try {
        DuckFeedingRecord.validateFeedingTime(this.timepicker.mytime);
      } catch(e) {
        form.timepicker.$setValidity('invalid', false);
        this.timepicker_validationMessage = e; 
      }

      try {
        DuckFeedingRecord.validateFoodName(this.foodName);
      } catch(e) {
        form.foodName.$setValidity('invalid', false);
        this.foodName_validationMessage = e; 
      }

      try {
        DuckFeedingRecord.validateFeedingLocation(this.feedingLocation);
      } catch(e) {
        form.feedingLocation.$setValidity('invalid', false);
        this.feedingLocation_validationMessage = e; 
      }

      try {
        DuckFeedingRecord.validateNumberOfDucks(this.numberOfDucks);
      } catch(e) {
        form.numberOfDucks.$setValidity('invalid', false);
        this.numberOfDucks_validationMessage = e; 
      }

      try {
        DuckFeedingRecord.validateFoodType(this.foodType);
      } catch(e) {
        form.foodType.$setValidity('invalid', false);
        this.foodType_validationMessage = e; 
      }

      try {
        DuckFeedingRecord.validateFoodQuantity(this.foodQuantity);
      } catch(e) {
        form.foodQuantity.$setValidity('invalid', false);
        this.foodQuantity_validationMessage = e; 
      }
      console.log(this.datepicker);
      if(form.$valid) {
        let feedingRecord = new DuckFeedingRecord(this.datepicker.dt,
                                                  this.timepicker.mytime, 
                                                  this.foodName,
                                                  this.feedingLocation,
                                                  this.numberOfDucks,
                                                  this.foodType,
                                                  this.foodQuantity)
        console.log(feedingRecord);
        this.addItemService.add(feedingRecord);
      }
    }
  }
  AddItemController.$inject = ['$scope', '$log', 'addItemService'];
  
  var initTimePicker = function() {
    
    return {
      mytime: new Date(),

      hstep: 1,
      mstep: 15,
    
      options: {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
      },
    
      ismeridian: true,
      toggleMode: function() {
        ismeridian = ! ismeridian;
      },
    
      clear: function() {
        mytime = null;
      }
    }
  }

  var initiDatePicker = function() {
    
    return {
      today: new Date(),
    
      clear: function() {
        dt = null;
      },
    
      options: {
        //customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
      },
    
      // Disable weekend selection
      disabled: function(data) {
        var date = data.date,
          mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
      },
    
      toggleMin: function() {
        options.minDate = options.minDate ? null : new Date();
      },
    
      setDate: function(year, month, day) {
        dt = new Date(year, month, day);
      },
    
      tomorrow: new Date() +1,
      afterTomorrow: new Date() +2,
      events: [
        {
          date: new Date() +1,
          status: 'full'
        },
        {
          date: new Date() +2,
          status: 'partially'
        }
      ],
      getDayClass: function (data) {
        var date = data.date,
          mode = data.mode;
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0,0,0,0);
    
          for (var i = 0; i < events.length; i++) {
            var currentDay = new Date(events[i].date).setHours(0,0,0,0);
    
            if (dayToCheck === currentDay) {
              return events[i].status;
            }
          }
        }
    
        return '';
      }
    
    }
  }