angular.module('GoodocRealtimeStatic')
    .controller('iOSCtrl', ['$scope', '$rootScope', '$window', iOSCtrl]);

function iOSCtrl($scope, $rootScope, $window) {
   $scope.charts = [{
      reportType: 'ga',
      query: {
          metrics: 'ga:sessions',
          dimensions: 'ga:date',
          'start-date': '30daysAgo',
          'end-date': 'yesterday'
      },
      chart: {
          container: 'chart-container-3',
          type: 'LINE',
          options: {
              width: '100%'
          }
        }
      }, {
      reportType: 'ga',
      query: {
          metrics: 'ga:sessions',
          dimensions: 'ga:browser',
          'start-date': '30daysAgo',
          'end-date': 'yesterday'
      },
      chart: {
          container: 'chart-container-4',
          type: 'PIE',
          options: {
              width: '100%',
              is3D: true,
              title: 'Browser Usage'
          }
      }
  }];
  $scope.extraChart = {
      reportType: 'ga',
      query: {
          metrics: 'ga:sessions',
          dimensions: 'ga:date',
          'start-date': '30daysAgo',
          'end-date': 'yesterday',
          ids: 'ga:29903049:6' // put your viewID here
      },
      chart: {
          container: 'chart-container-3',
          type: 'LINE',
          options: {
              width: '100%'
          }
      }
  };
  $scope.defaultIds = {
      ids: 'UA-29903049-6'
  };
  $scope.queries = [{
      query: {
          ids: 'ga:29903049:6',  // put your viewID here
          metrics: 'ga:sessions',
          dimensions: 'ga:city'
      }
  }];
  // if a report is ready
  $scope.$on('$gaReportSuccess', function (e, report, element) {
      console.log(report, element);
  });

}