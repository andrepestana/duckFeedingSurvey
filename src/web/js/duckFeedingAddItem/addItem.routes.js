routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('addItem', {
      url: '/addItem',
      template: require('./addItem.html'),
      controller: 'AddItemController',
      controllerAs: 'vm'
    })
    .state('addItemSuccess', {
      url: '/addItemSuccess',
      template: require('./addItemSuccess.html')
    });;
}