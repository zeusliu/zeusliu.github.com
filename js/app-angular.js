/*
 app-AngularJS v1.0
 */
 var app = angular.module("app", []);
 var url_linux  = "http://www.zuanbeiwo.com:8080/zuanbeiwo";
 var url_mac = "http://localhost:8080/zuanbeiwo";
 var url_zuanbeiwo = url_linux;

     app.controller("ctrl", function ($scope, $http) {
         //Test AngularJS
         $scope.title = "GoPhoto中国 | GoPhoto摄影";
         $scope.qq ='3395099677';
         $scope.user = '';
        $http.get(url_zuanbeiwo+'/myfavimgs/json').success(function(response) {$scope.MyFavoriteImages = response.json;});//
        
        $scope.sendmsg = function(){
            var user = $scope.user;
            var name = $scope.user.name;
            var email = $scope.user.email;
            var msg = $scope.user.msg;
            if(name == null || email == null || msg == null){
                alert("姓名、联系方式、留言内容不能为空！");
                return ;
            }
        	var request = $http.post(url_zuanbeiwo+'/connectme/msg',$.param({
        		name:name,
        		email:email,
        		msg:msg
        	}),{headers:{'Content-Type': 'application/x-www-form-urlencoded'}});
			return request.success(function(response){
				alert("发送成功!");
			}).error(function(response){
				alert('send error~~');
			})

        }
     }
     );