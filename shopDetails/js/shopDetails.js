/**
 * Created by yangt on 2017/3/14.
 */

app.controller("shopDetailsCtrl",["$scope","$http","$state","carService","$timeout",function($scope,$http,$state,carService,$timeout){

    $state.go("/shopDetails.goods");

    $scope.data1 = {};
    $scope.data2 = [];
    $scope.data3 = [];

    $http.get("public/json/shopDetails1.json")
    .success(function (req) {
        // console.log(req);
        $scope.data1 = req;
        var imgPath = $scope.data1.image_path;
        $scope.data1.image_path = 'https://fuss10.elemecdn.com/' + imgPath + '.jpeg?imageMogr/format/webp/';
    })

    $http.get("public/json/shopDetails2.json")
        .success(function (req) {
            // console.log(req);
            $scope.data2 = req;
            for(i in $scope.data2){
                for(j in $scope.data2[i].foods){
                    var imgPath = $scope.data2[i].foods[j].image_path;
                    // console.log(imgPath.slice(-3));
                    if(imgPath.slice(-3) == 'peg'){
                        $scope.data2[i].foods[j].image_path = "https://fuss10.elemecdn.com/" + imgPath + ".jpeg?imageMogr/thumbnail/140x140/format/webp/quality/85";
                    }else if(imgPath.slice(-3) == 'png'){
                        $scope.data2[i].foods[j].image_path = "https://fuss10.elemecdn.com/" + imgPath + ".png?imageMogr/thumbnail/140x140/format/webp/quality/85";
                    }
                }
            }

        })

    $timeout(function () {

        $scope.data2[0].id = 1;
        $("#wrap .menuView .menuCategory .menuList").eq(0).addClass("active");
        var lastTop = 0;
        $("#wrap .menuView .menuCategory .menuList").click(function() {
            var anchor = $(this).attr('anchor');
            lastTop += $("#"+anchor).position().top;
            $('#wrap .menuView .menuDetails').animate({
                scrollTop: lastTop
            }, 300);
            //切换菜单样式
            $(this).addClass("active").siblings().removeClass("active");
        });

        // $scope.d = [];
        // for(i in $scope.data2){
        //     $scope.d[i] = $("#"+$scope.data2[i].id).position().top;
        // }
        // $('#wrap .menuView .menuDetails').scroll(function () {
        //     var scroH = $(this).scrollTop(); //滚动条位置
        //     for(i in $scope.data2){
        //         if(scroH>=$scope.d[i]){
        //             set_cur($scope.data2[i].id);//设置状态
        //         }
        //     }
        // });
        // function set_cur(n){
        //     if($("#wrap .menuView .menuCategory .menuList").hasClass("active")){
        //         $("#wrap .menuView .menuCategory .menuList").removeClass("active");
        //     }
        //     $("#wrap .menuView .menuCategory .menuList [anchor="+n+"]").addClass("active");
        // }

    },100);



    $scope.carData = carService.carData;
    // console.log($scope.carData);
    $scope.carSum = carService.carSum;
    $scope.carNum = carService.carNum;
    $scope.carBc = 0;

    $scope.addCar = function (j) {
        carService.add(j);
        $scope.isEmpty = true;
        $scope.carSum = carService.carSum;
        $scope.carNum = carService.carNum;
        // console.log($scope.carData);
        // console.log($scope.carSum);
        // console.log(carService.removeAll().carSum)

        var offset = $("#wrap .shoppingCar .initial .car").offset();
        var flyer = $('<div class="u-flyer"></div>');
        flyer.fly({
            start: {
                left: event.pageX-10,//抛物体起点横坐标
                top: event.pageY //抛物体起点纵坐标
            },
            end: {
                left: offset.left + 20,//抛物体终点横坐标
                top: offset.top + 10, //抛物体终点纵坐标
            },
            onEnd: function() {
                this.destroy(); //销毁抛物体
            }
        });

        $("#wrap .shoppingCar .initial .car").removeClass("numberHide");
        $("#wrap .shoppingCar .initial>a").removeClass("empty");
    }
    $scope.subCar = function (j) {
        carService.sub(j);
        $scope.isEmpty =  $scope.carData;
        if(JSON.stringify( $scope.isEmpty ) == "{}"){
            $scope.isEmpty = false;
            $scope.carBc= 0;
            // console.log($scope.carBc);
            $("#wrap .shoppingCar .initial .car").addClass("numberHide");
            $("#wrap .shoppingCar .initial>a").addClass("empty");
        }
        $scope.carSum = carService.carSum;
        $scope.carNum = carService.carNum;
        // console.log($scope.carData);
        // console.log($scope.carSum);
    }
    $scope.removeAll = function () {
        $scope.carData = carService.removeAll().carData;
        $scope.isEmpty = false;
        $scope.carBc= 0;
        // console.log($scope.carBc);
        $scope.carSum = carService.carSum;
        $("#wrap .shoppingCar .initial .car").addClass("numberHide");
        $("#wrap .shoppingCar .initial>a").addClass("empty");
    }


    $scope.show = function () {
        $scope.isEmpty =  $scope.carData;
        if(JSON.stringify( $scope.isEmpty ) == "{}"){
            $scope.isEmpty = false;
        }else{
            $scope.isEmpty = true;
            $scope.carBc=!$scope.carBc;
        }
    }


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


}]);



