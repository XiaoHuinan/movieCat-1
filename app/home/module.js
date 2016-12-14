// 1-1 创建主页子模块，并引入路由，将路由的url设置为"/home_page"(与首页a链接对应)

(function(angular){
  // 首页模块
  angular.module("moviecat.home", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider){
      $routeProvider.when("/home_page",{
        // 路径注意：由于js文件最终是在index.html中执行的
        // 所以，是相对于index.html来计算路径的
        // 推荐使用绝对路径，少用相对路径
        templateUrl: "./home/view.html"
      });
    }]);
})(angular)