var app = angular.module("myApp",["ui.router","angularCSS","me-pageloading"]);

app.config(["$stateProvider","$urlRouterProvider","mePageLoadingProvider",function($stateProvider,$urlRouterProvider,mePageLoadingProvider){

    $urlRouterProvider.otherwise("home");

	$stateProvider
	.state("/home",{
		url:"/home",
		views:{
			"indexView":{
                templateUrl:"./home/home.html",
                css:"./home/css/home.css",
                controller:"homeCtrl",
                resolve: {
                    data: ['$q', function($q){
                        var defer = $q.defer();
                        setTimeout(function(){
                            defer.resolve('home');
                        }, 800);
                        return defer.promise;
                    }]
                }
			}
		}
	})
	.state("/discover",{
        url:"/discover",
        views:{
            "indexView":{
                templateUrl:"./discover/discover.html",
                css:"./discover/css/discover.css",
                controller:"discoverCtrl",
                resolve: {
                    data: ['$q', function($q){
                        var defer = $q.defer();
                        setTimeout(function(){
                            defer.resolve('discover');
                        }, 800);
                        return defer.promise;
                    }]
                }
            }
        }
	})
	.state("/order",{
        url:"/order",
        views:{
            "indexView":{
                templateUrl:"./order/order.html",
                css:"./order/css/order.css",
                controller:"orderCtrl",
                resolve: {
                    data: ['$q', function($q){
                        var defer = $q.defer();
                        setTimeout(function(){
                            defer.resolve('order');
                        }, 500);
                        return defer.promise;
                    }]
                }
            }
        }
	})
	.state("/my",{
        url:"/my",
        views:{
            "indexView":{
                templateUrl:"./my/my.html",
                css:"./my/css/my.css",
                controller:"myCtrl",
                resolve: {
                    data: ['$q', function($q){
                        var defer = $q.defer();
                        setTimeout(function(){
                            defer.resolve('my');
                        }, 500);
                        return defer.promise;
                    }]
                }
            }
        }
	})
	.state("/deliciousFood",{
		url:"/deliciousFood",
		views:{
			"indexView":{
				templateUrl:"./deliciousFood/deliciousFood.html",
				css:"./deliciousFood/css/deliciousFood.css",
				controller:"deliciousFoodCtrl",
                resolve: {
                    data: ['$q', function($q){
                        var defer = $q.defer();
                        setTimeout(function(){
                            defer.resolve('deliciousFood');
                        }, 800);
                        return defer.promise;
                    }]
                }
			}
		}
	})
	.state("/shopDetails",{
		url:"/shopDetails",
		views:{
			"indexView":{
                templateUrl:"shopDetails/shopDetails.html",
                controller:"shopDetailsCtrl",
                resolve: {
                    data: ['$q', function($q){
                        var defer = $q.defer();
                        setTimeout(function(){
                            defer.resolve('shopDetails');
                        }, 1000);
                        return defer.promise;
                    }]
                }
			}
		}
	})
	.state("/shopDetails.goods",{
		url:"/shopDetails.goods",
		views:{
			"shopView":{
				templateUrl:"shopDetails/goods.html",
                css:"shopDetails/css/shopDetails.css"
			}
		}
	})
	.state("/shopDetails.evaluate",{
		url:"/shopDetails.evaluate",
		views:{
			"shopView":{
				templateUrl:"shopDetails/evaluate.html",
                css:"shopDetails/css/shopDetails.css"
			}
		}
	})
	.state("/registerAndLogin",{
		url:"/registerAndLogin",
		views:{
			"indexView":{
				templateUrl:"./registerAndLogin/registerAndLogin.html",
				controller:"registerAndLoginCtrl",
                resolve: {
                    data: ['$q', function($q){
                        var defer = $q.defer();
                        setTimeout(function(){
                            defer.resolve('registerAndLogin');
                        }, 500);
                        return defer.promise;
                    }]
                }
			}
		}
	})
	.state("/registerAndLogin.register",{
		url:"/registerAndLogin.register",
		views:{
			"RALView":{
				templateUrl:"registerAndLogin/register.html",
				css:"registerAndLogin/css/registerAndLogin.css"
			}
		}
	})
	.state("/registerAndLogin.login",{
		url:"/registerAndLogin.login",
		views:{
			"RALView":{
				templateUrl:"registerAndLogin/login.html",
				css:"registerAndLogin/css/registerAndLogin.css"
			}
		}
	})
}]);