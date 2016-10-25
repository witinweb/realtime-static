angular.module('GoodocRealtimeStatic', [
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'goodocPartials',
    'ngAnalytics'
])
    .run(['$window', '$rootScope', '$state', '$stateParams', '$http', '$location', 'ngAnalyticsService', function ($window, $rootScope, $state, $stateParams, $http, $location, ngAnalyticsService) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            
        });
        $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
            

        });
        ngAnalyticsService.setClientId('388162727128-o7ql589r4j1jo9nkbn3mmlqgrf8es5v5.apps.googleusercontent.com');
    }])
    // 디버그 정보 제거를 통한 성능 향상
    .config(['$compileProvider', '$httpProvider', function ($compileProvider, $httpProvider) {
        $compileProvider.debugInfoEnabled(false);
    }]);