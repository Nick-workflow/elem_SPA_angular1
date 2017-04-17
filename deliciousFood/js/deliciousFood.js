/**
 * Created by yangt on 2017/3/15.
 */
app.controller("deliciousFoodCtrl",["$scope","$http",function($scope,$http){
    $scope.data3 = [];
    $http.get("public/json/deliciousFood3.json")
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