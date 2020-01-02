import { DuckFeedingRecord } from "../../../common/duckFeedingRecord";

export default class AddItemController {
    constructor($scope, $log, duckFeedingService, $state, $timeout) {
      this.$scope = $scope;
      this.datePicker = initiDatePicker();
      this.timepicker = initTimePicker();
      this.foodName = '';
      this.feedingLocation = '';
      this.numberOfDucks = 1;
      this.foodType = '';
      this.foodQuantity = 0;
      this.duckFeedingService = duckFeedingService;
      this.$state = $state;
      this.$timeout = $timeout;
    }
    
    submit(form) {
      try {
        DuckFeedingRecord.validateFeedingDate(this.datepicker.dt);
        form.datepicker.$setValidity('valid', true);
      } catch(e) {
        form.datepicker.$setValidity('valid', false);
        this.datepicker_validationMessage = e; 
      }

      try {
        DuckFeedingRecord.validateFeedingTime(this.timepicker.mytime);
        form.timepicker.$setValidity('valid', true);
      } catch(e) {
        form.timepicker.$setValidity('valid', false);
        this.timepicker_validationMessage = e; 
      }

      try {
        DuckFeedingRecord.validateFoodName(this.foodName);
        form.foodName.$setValidity('valid', true);
      } catch(e) {
        form.foodName.$setValidity('valid', false);
        this.foodName_validationMessage = e; 
      }

      try {
        DuckFeedingRecord.validateFeedingLocation(this.feedingLocation);
        form.feedingLocation.$setValidity('valid', true);
      } catch(e) {
        form.feedingLocation.$setValidity('valid', false);
        this.feedingLocation_validationMessage = e; 
      }

      try {
        DuckFeedingRecord.validateNumberOfDucks(this.numberOfDucks);
        form.numberOfDucks.$setValidity('valid', true);
      } catch(e) {
        form.numberOfDucks.$setValidity('valid', false);
        this.numberOfDucks_validationMessage = e; 
      }

      try {
        DuckFeedingRecord.validateFoodType(this.foodType);
        form.foodType.$setValidity('valid', true);
      } catch(e) {
        form.foodType.$setValidity('valid', false);
        this.foodType_validationMessage = e; 
      }

      try {
        DuckFeedingRecord.validateFoodQuantity(this.foodQuantity);
        form.foodQuantity.$setValidity('valid', true);
      } catch(e) {
        form.foodQuantity.$setValidity('valid', false);
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
        this.duckFeedingService.add(feedingRecord);
        this.$state.go('addItemSuccess');
      } 
    }
  }
  AddItemController.$inject = ['$scope', '$log', 'duckFeedingService', '$state', '$timeout'];
  
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