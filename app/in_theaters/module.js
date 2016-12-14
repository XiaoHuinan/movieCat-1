(function(angular){
  // 创建正在热映模块
  angular.module("moviecat.in_theaters", ["ngRoute"])
    .config(['$routeProvider',function($routeProvider) {
      // page表示当前处于多少页，这个参数可以省略，省略则默认展示第一页
      $routeProvider.when("/in_theaters/:page?", {
        templateUrl: "./in_theaters/view.html",
        controller: "InTheatersController"
      })
    }])
    // 4-1 注入$http，并请求数据
    .controller("InTheatersController", [
      "$scope", 
      "$http", 
      "JSONPSvr", 
      "$routeParams", 
      function($scope, $http, JSONPSvr, $routeParams){
        // 如果值没有传入，默认为undefined
        // console.log($routeParams.page);

        // 实现分页功能————也就是控制url中count和start的两个参数————页面中需要展示的数据有三个：总条数 / 当前页 / 总页数
        $scope.pageSize = 10;   // 表示当前页展示的条数
        // $scope.curPage = 1;     // 表示当前处于第几页
        // 实现页面的动态变化需要配合路由来控制
        $scope.curPage = $routeParams.page || 1;

        // 每一页的起始值
        var start = ($scope.curPage-1) * $scope.pageSize;

        // 如何计算总页数：总条数/每页大小 向上取整

        // https://api.douban.com/v2/movie/in_theaters?count=1&start=0&callback=myCallback
        JSONPSvr.jsonp("https://api.douban.com/v2/movie/in_theaters", {count:$scope.pageSize,start:start}, function(data){
          $scope.movie = data;
          $scope.totalPages = Math.ceil(data.total / $scope.pageSize);
          // 由于异步请求，数据获得后，angular无法再次渲染数据，需要强制脏检查
          $scope.$apply();
      });

    }])
})(angular)