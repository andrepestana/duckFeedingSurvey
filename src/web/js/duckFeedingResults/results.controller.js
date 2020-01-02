export default class ResultsController {
  constructor(duckFeedingService) {
    var self = this;
    this.results = [];
    this.duckFeedingService = duckFeedingService;
    this.duckFeedingService.results().then(function(result) {
      self.results = result.data;
    });
  }
}
  
ResultsController.$inject = ['duckFeedingService'];
  