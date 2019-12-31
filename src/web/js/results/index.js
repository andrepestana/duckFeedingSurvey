import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './results.routes';
import ResultsController from './results.controller';

export default angular.module('app.results', [uirouter])
  .config(routing)
  .controller('ResultsController', ResultsController)
  .name;