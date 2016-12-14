(function(angular){
  angular.module("moviecat.jsonp", [])
    .service("JSONPSvr", ["$window", function($window){
      var doc = $window.document;

      // jsonp方法的作用，用来发送jsonp请求获取数据
      this.jsonp = function(url, params, callback){
          url += "?";
          for(var k in params){
            url += k + "=" + params[k] + "&";
          }

          var cbName = "jsonp_" + (new Date() - 0);
          url += "callback=" + cbName;

          $window[cbName] = function(data){
            callback(data);

            document.body.removeChild(script);
            delete window[cbName];
          }

          var script = document.createElement("script");
          script.src = url;
          doc.body.appendChild(script);
      }
    }]);
})(angular)