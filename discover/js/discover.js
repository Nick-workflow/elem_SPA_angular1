
app.controller("discoverCtrl",["$scope","$http",function($scope,$http){
    $scope.data1 = {};
    $scope.data2 = [];
    $scope.data3 = [];
    $scope.data4 = {};
    $scope.data5 = [];
    $http.get("public/json/discover1.json")
        .success(function (req) {
            // console.log(req);
            $scope.data1 = req;

            for(i in $scope.data1){
                var imgData = $scope.data1[i];
                // console.log(imgData);
                for(j in imgData){
                    var imgPath1 = imgData[j].main_pic_hash;
                    var imgPath2 = imgData[j].sub_pic_hash;
                    // console.log(imgPath1);
                    // console.log(imgPath2);
                    if(imgPath1 !== ''){
                        $scope.data1[i][j].main_pic_hash = 'https://fuss10.elemecdn.com/' + imgPath1 + '.jpeg?imageMogr/format/webp/';
                    }
                    if(imgPath2 !== ''){
                        $scope.data1[i][j].sub_pic_hash = 'https://fuss10.elemecdn.com/' + imgPath2 + '.jpeg?imageMogr/format/webp/';
                    }
                }
            }
        })
    $http.get("public/json/discover2.json")
        .success(function (req) {
            // console.log(req);
            $scope.data2 = req;

            for(i in $scope.data2){
                var imgPath = $scope.data2[i].foods[0].image_hash;
                imgPath = imgPath.substring(0, 1)+"/"+imgPath.substring(1,3)+"/"+imgPath.substring(3);
                // console.log(imgPath);
                // console.log(imgPath.slice(-3));
                if(imgPath.slice(-3) == 'peg'){
                    $scope.data2[i].foods[0].image_hash = 'https://fuss10.elemecdn.com/' + imgPath + '.jpeg?imageMogr/format/webp/';
                }else if(imgPath.slice(-3) == 'png'){
                    $scope.data2[i].foods[0].image_hash = 'https://fuss10.elemecdn.com/' + imgPath + '.png?imageMogr/format/webp/';
                }
            }
        })


    $http.get("public/json/discover3.json")
        .success(function (req) {
            // console.log(req);
            $scope.data3 = req;
            for(i in $scope.data3){
                var imgPath = $scope.data3[i].image_hash;
                $scope.data3[i].image_hash = 'https://fuss10.elemecdn.com/' + imgPath + '.jpeg?imageMogr/format/webp/';

            }
        })

    $http.get("public/json/discover4.json")
        .success(function (req) {
            // console.log(req);
            $scope.data4 = req[0];
            for(i in $scope.data4.foods){
                var imgPath = $scope.data4.foods[i].image_hash;
                // console.log(imgPath);
                $scope.data4.foods[i].image_hash = 'https://fuss10.elemecdn.com/' + imgPath + '.jpeg?imageMogr/format/webp/';
            }
        })

    $http.get("public/json/discover5.json")
        .success(function (req) {
            // console.log(req);
            $scope.data5 = req;
            for(i in $scope.data5){
                var imgPath = $scope.data5[i].image_hash;
                $scope.data5[i].image_hash = 'https://fuss10.elemecdn.com/' + imgPath + '.jpeg?imageMogr/format/webp/';
            }
        })
}]);

