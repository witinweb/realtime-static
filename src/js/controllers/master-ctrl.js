/**
 * Master Controller
 */

angular.module('GoodocRealtimeStatic')
    .controller('MasterCtrl', ['$scope', '$rootScope', '$window','$http', MasterCtrl]);

function MasterCtrl($scope, $rootScope, $window, $http) {
  $scope.cards = [
    {
      'title':'Web',
      'container':'active-users-container-1',
      'defaultIds':{
          'ids': 'ga:80446779',
          'pollingInterval': 65
      }
    },{
      'title':'Android',
      'container':'active-users-container-2',
      'defaultIds':{
          'ids': 'ga:77512838',
          'pollingInterval': 65
      }
    },{
      'title':'iOS',
      'container':'active-users-container-3',
      'defaultIds':{
          'ids': 'ga:84926759',
          'pollingInterval': 65
      }
    }
  ]
};