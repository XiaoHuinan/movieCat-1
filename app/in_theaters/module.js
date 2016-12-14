(function(angular){
  // 创建正在热映模块
  angular.module("moviecat.in_theaters", ["ngRoute"])
    .config(['$routeProvider',function($routeProvider) {
      $routeProvider.when("/in_theaters", {
        templateUrl: "./in_theaters/view.html",
        controller: "InTheatersController"
      })
    }])
    // 4-1 注入$http，并请求数据
    .controller("InTheatersController", ["$scope", "$http", "JSONPSvr", function($scope, $http, JSONPSvr){
      // https://api.douban.com/v2/movie/in_theaters?count=1&start=0&callback=myCallback
          JSONPSvr.jsonp("https://api.douban.com/v2/movie/in_theaters", {count:10,start:0}, function(data){
            $scope.movie = data;
            // 由于异步请求，数据获得后，angular无法再次渲染数据，需要强制脏检查
            $scope.$apply();
          });
    }])
})(angular)