angular.module('GoodocRealtimeStatic', [
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'goodocPartials',
    'ngAnalytics'
])
    .run(['$window', '$rootScope', '$state', '$stateParams', '$http', '$location', '$interval', 'ngAnalyticsService', function ($window, $rootScope, $state, $stateParams, $http, $location, $interval, ngAnalyticsService) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.status = true;
        $state.go('status');
        var time = $interval(function(){
          var cal = new Date();       //오늘의 날짜 객체 생성
          var hour = cal.getHours();  //시 구하기
          var min = cal.getMinutes(); //분 구하기
          var day = cal.getDay();     //요일구하기 0-> 일요일
           
          if(min <10) 
          {
              min = "0"+min;          //1분이어도 01로 표시되게
          }
       
          //시간과 분을 문자열로 변환
          var hourTxt = hour.toString();  
          var minTxt = min.toString();
       
          //시간과 분을 문자열로 붙인다음 *1을 하여 다시 숫자형으로 변환, 요일도 숫자형으로 변환
          var nowTimeTxt = hourTxt+minTxt;
          var nowTimeNum = nowTimeTxt * 1;
          var nowDayNum = day * 1; 
           
          var minCheck = 0900;     //최소시간 8시30분
          var maxCheck = 1900;     //최대시간 9시10분
           
          console.log("현재 시간은" + hour + "시 " + min + " 분 입니다. \n한마디로 " + nowTimeNum);
           
          if( nowTimeNum > minCheck && nowTimeNum < maxCheck && nowDayNum != 0 && nowDayNum != 6)
          {
              $rootScope.status = true;
          }
          else
          {
              $rootScope.status = false;
          }
        }, 60000)
        $rootScope.$watch('status', function(nV, oV){
          if(nV){
            $state.go('status');
          }else{
            $state.go('index');
          }
        })
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