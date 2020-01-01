import '../css/main.css';

import angular  from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import uibootstrap from 'angular-ui-bootstrap';

import routing  from './app.config';
import home     from './duckFeedingHome';
import results  from './duckFeedingResults';
import addItem  from './duckFeedingAddItem';

angular
  .module('app', [uirouter, home, results, addItem, uibootstrap])
  .config(routing);