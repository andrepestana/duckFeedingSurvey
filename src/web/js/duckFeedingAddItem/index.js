import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './addItem.routes';
import AddItemController from './addItem.controller';
import addItemService from '../services/addItem.service'

export default angular.module('app.addItem', [uirouter, addItemService])
  .config(routing)
  .controller('AddItemController', AddItemController)
  .name;