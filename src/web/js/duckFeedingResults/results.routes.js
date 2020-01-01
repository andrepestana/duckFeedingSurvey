routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('results', {
      url: '/results',
      template: require('./results.html'),
      controller: 'ResultsController',
      controllerAs: 'vm'
    });
}