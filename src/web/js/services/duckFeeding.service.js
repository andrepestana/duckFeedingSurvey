import angular from 'angular';

class DuckFeedingService {
  constructor($http) {
    this.$http = $http;
  }

  //TODO get url from parameter
  add(duckFeedingRecord) {
    this.$http({
      method: 'POST',
      url: 'http://138.197.154.122:1234/duckfeeding/create',
      data: duckFeedingRecord
    }).then(function (success) {
      console.log(success);
    }, function (error) {
      console.log(error);
    });
  }

  results() {
    return this.$http({
      method: 'GET',
      url: 'http://138.197.154.122:1234/duckfeeding/results'
    }).then(function (success) {
      return success;
    }, function (error) {
      console.log(error);
    });
  }
}

export default angular.module('services.addItemService', [])
  .service('duckFeedingService', DuckFeedingService)
  .name;

DuckFeedingService.$inject = ['$http'];