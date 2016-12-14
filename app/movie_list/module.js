(function(angular){
  // 创建正在热映模块
  angular.module("moviecat.movie_list", ["ngRoute"])
    .config(['$routeProvider',function($routeProvider) {
      $routeProvider.when("/:movieType/:page?", {
        templateUrl: "./movie_list/view.html",
        controller: "MovieListController"
      })
    }])
    .controller("MovieListController", [
      "$scope", 
      "$http", 
      "JSONPSvr", 
      "$routeParams", 
      "$route",
      function($scope, $http, JSONPSvr, $routeParams, $route){
        $scope.pageSize = 10;
        $scope.curPage = $routeParams.page || 1;
        var start = ($scope.curPage-1) * $scope.pageSize;
        JSONPSvr.jsonp("https://api.douban.com/v2/movie/"+$routeParams.movieType, {count:$scope.pageSize,start:start}, function(data){
          $scope.movie = data;
          $scope.totalPages = Math.ceil(data.total / $scope.pageSize);
          $scope.$apply();
          $scope.goPages = function(current) {
            if(current <= 0 || current > $scope.totalPages){
              return;
            }
            $route.updateParams({page: current});
          }
      });

    }])
})(angular)