'use strict';

/**
 * Route configuration for the module.
 */
angular.module('GoodocRealtimeStatic').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    // Application routes
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: '/templates/index.html'
        })
      }
]);