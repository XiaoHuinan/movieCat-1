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
      /*$http.get("./in_theaters/data.json")
          // 数据请求成功后的回调函数
          .then(function(response){
            // console.log(response);
            $scope.movie = response.data;
            // console.log($scope.movie);
          // 数据请求失败后的回调函数
          }, function(response){
            // console.log(response);
          })*/

          // 由于豆瓣API中要求callback只能包含数字。字母下划线，且长度不大于50
          // 但是在angular中所有的回调函数都是angular.callback._0 这种形式(带点)
          // 这样与要求不符，无法使用angular中提供的jsonp请求
          $http.jsonp("http://v.showji.com/Locating/showji.com2016234999234.aspx?m=13545158813&output=json&callback=JSON_CALLBACK&timestamp=' + (new Date()-0)")
          .then(function(response){
            console.log(response);
          }, function(){
            console.log("error");
          })
    }])
})(angular)