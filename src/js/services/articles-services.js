/**
 * articles Service
 */

angular
    .module('GoodocRealtimeStatic')
    .factory('Articles', ['$http', Articles])

function Articles($http) {
    var Articles = {};
    var ArticlesPath = 'https://api.goodoc.kr/bot/';

    // 글상세
    Articles.getArticle = function (id) {
        return $http.get(ArticlesPath+id)
    };

    return Articles;
}