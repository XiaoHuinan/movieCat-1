(function (angular) {
    // "use strict";

    // 1-3 创建主模板，并将主页子模板引入
    // start your ride
    // 项目的主模块, 所有其他模块都有主模块同意处理
    angular.module("moviecat", [
      "moviecat.home", 
      /*"moviecat.in_theaters",
      "moviecat.coming_soon",
      "moviecat.top250",*/
      "moviecat.jsonp",
      "moviecat.movie_list"
    ]);

})(angular);