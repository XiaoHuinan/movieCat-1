(function(angular){
  // 创建正在热映模块
  angular.module("moviecat.coming_soon", ["ngRoute"])
    .config(['$routeProvider',function($routeProvider) {
      $routeProvider.when("/coming_soon", {
        templateUrl: "./coming_soon/view.html",
        controller: "ComingSoonController"
      })
    }])
    .controller("ComingSoonController", ["$scope", "$http", function($scope, $http){
      $http.get("./coming_soon/data.json")
          .then(function(response){
            $scope.movie = response.data;
            console.log($scope.movie)
          },function(response){
            console.log("error");
          })
    }])
})(angular)