(function(angular){
  // 创建正在热映模块
  angular.module("moviecat.top250", ["ngRoute"])
    .config(['$routeProvider',function($routeProvider) {
      $routeProvider.when("/top250", {
        templateUrl: "./top250/view.html",
        controller: "top250Controller"
      })
    }])
    .controller("top250Controller", ["$scope", function($scope){

    }])
})(angular)