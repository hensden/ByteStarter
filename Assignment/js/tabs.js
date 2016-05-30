angular.module('TabsApp', [])
.controller('TabsCtrl', ['$scope', function ($scope) {
    $scope.tabs = [{
            title: 'Trending',
            url: 'Trending.tpl.html'
        }, {
            title: 'Popular',
            url: 'Popular.tpl.html'
        }, {
            title: 'Newest',
            url: 'Newest.tpl.html'
    }];

    $scope.currentTab = 'Trending.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);
