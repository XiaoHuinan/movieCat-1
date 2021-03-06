(function(angular){
  // 创建正在热映模块
  angular.module("moviecat.coming_soon", ["ngRoute"])
    .config(['$routeProvider',function($routeProvider) {
      // page表示当前处于多少页，这个参数可以省略，省略则默认展示第一页
      $routeProvider.when("/coming_soon/:page?", {
        templateUrl: "./coming_soon/view.html",
        controller: "ComingSoonController"
      })
    }])
    // 4-1 注入$http，并请求数据
    .controller("ComingSoonController", [
      "$scope", 
      "$http", 
      "JSONPSvr", 
      "$routeParams", 
      "$route",
      function($scope, $http, JSONPSvr, $routeParams, $route){
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

        // https://api.douban.com/v2/movie/coming_soon?count=1&start=0&callback=myCallback
        JSONPSvr.jsonp("https://api.douban.com/v2/movie/coming_soon", {count:$scope.pageSize,start:start}, function(data){
          $scope.movie = data;
          $scope.totalPages = Math.ceil(data.total / $scope.pageSize);
          // 由于异步请求，数据获得后，angular无法再次渲染数据，需要强制脏检查
          $scope.$apply();

          // 实现上一页和下一页翻页功能
          $scope.goPages = function(current) {

            // 限制页面的范围1~最大页
            if(current <= 0 || current > $scope.totalPages){
              return; // 此时不再执行下面的代码, 即不再发生改变 
            }

            // 因为路由发生改变，会导致对应的控制器中的代码重新执行一遍
            // 这句话可以省略
            // current表示传递过来的当前页
            // $scope.curPage = current;

            // 通过调用updateParams来更新路由中的参数
            // 参数为一个对象，对象的属性为路由配置好的参数-page
            $route.updateParams({page: current});
            // angular内部默认行为
            // 只要路由的参数发生了改变，就会重新执行控制器中的代码
          }
      });

    }])
})(angular)