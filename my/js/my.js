app.controller("myCtrl",["$scope","$http",function($scope,$http){
    if(localStorage.getItem('name')){
        $("#wrap .profile .center p:eq(0)").html(localStorage.getItem('name'));
        $("#wrap .profile .center p:eq(1)").html("*********");
    }

    // console.log(localStorage.getItem('name'))
}]);
