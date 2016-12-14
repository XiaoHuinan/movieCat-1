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
    .controller("InTheatersController", ["$scope", "$http", function($scope, $http){
      // 路径依然是以在哪执行的为参考
      $http.get("./in_theaters/data.json")
          // 数据请求成功后的回调函数
          .then(function(response){
            // console.log(response);
            $scope.movie = response.data;
            // console.log($scope.movie);
          // 数据请求失败后的回调函数
          }, function(response){
            // console.log(response);
          })
    }])
})(angular)