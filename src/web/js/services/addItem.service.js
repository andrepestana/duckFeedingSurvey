import angular from 'angular';

class AddItemService {
  constructor() {
  }

  add(duckFeedingRecord) {
    console.log("Adding: ", duckFeedingRecord);
  }
}

export default angular.module('services.addItemService', [])
  .service('addItemService', AddItemService)
  .name;