import '../css/main.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './duckFeeding';
import results from './results';

angular.module('app', [uirouter, home, results])
  .config(routing);