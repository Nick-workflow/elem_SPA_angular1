
app.controller("homeCtrl",["$scope","$http","$timeout",function($scope,$http,$timeout){
	$scope.data1 = [];
    $scope.data2 = [];
    $scope.data3 = [];
	$http.get("public/json/hot-search.json")
        .success(function (req) {
            // console.log(req);
            $scope.data1 = req;
        })
    $http.get("public/json/menu-banner.json")
        .success(function (req) {
            // console.log(req);
            $scope.data2 = req;

            $timeout(function () {
                mySwiper();
            },100);
        })
    $http.get("public/json/recommended-business.json")
        .success(function (req) {
            // console.log(req);
            $scope.data3 = req;
            for(i in $scope.data3){
                var imgPath = $scope.data3[i].image_path;
                // console.log(imgPath.slice(-3));
                if(imgPath.slice(-3) == 'peg'){
                    $scope.data3[i].image_path = imgPath + '.jpeg';
                }else if(imgPath.slice(-3) == 'png'){
                    $scope.data3[i].image_path = imgPath + '.png';
                }
            }
        })


    function mySwiper() {
        var menuBanner = new Swiper(".swiper-container",{
            direction: "horizontal",
            autoplay: 8000,
            //当点击切换之后，再次启动自动轮播
            autoplayDisableOnInteraction : false,
            loop: true,
            pagination: ".swiper-pagination",
            paginationClickable: true
        });
    }

}]);


