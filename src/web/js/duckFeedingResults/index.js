import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './results.routes';
import ResultsController from './results.controller';
import duckFeedingService from '../services/duckFeeding.service'

export default angular.module('app.results', [uirouter, duckFeedingService])
  .config(routing)
  .controller('ResultsController', ResultsController)
  .name;