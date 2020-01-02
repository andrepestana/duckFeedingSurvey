import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './addItem.routes';
import AddItemController from './addItem.controller';
import duckFeedingService from '../services/duckFeeding.service'

export default angular.module('app.addItem', [uirouter, duckFeedingService])
  .config(routing)
  .controller('AddItemController', AddItemController)
  .name;