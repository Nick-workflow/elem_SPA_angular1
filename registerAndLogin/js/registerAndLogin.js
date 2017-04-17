/**
 * Created by yangt on 2017/3/18.
 */
app.controller("registerAndLoginCtrl",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
    $state.go("/registerAndLogin.login");

    $scope.isActive = false;
    $scope.toggleClass = function () {
        $scope.isActive = !$scope.isActive;
    }

    $scope.isSwith = true;
    $scope.type = "password";
    $scope.switch = function () {
        $scope.isSwith = !$scope.isSwith;
        if($scope.type == "password"){
            $scope.type = "text";
        }else if($scope.type == "text"){
            $scope.type = "password";
        }
    }

    $scope.register = function () {
        var pwd = $("#pwd").val();
        var name = $("#name").val();
        console.log(pwd,name);
        $.ajax({
            url:"http://duif.applinzi.com/register.php",
            type:"post",
            data:{
                name: name,
                pwd: pwd,
                email: "648020580@qq.com"
            },
            success: function(req){
                var result = JSON.parse(req);
                console.log(result);
                if(result.reCode == 200){
                    $("main").html("<p class='state'>"+result.reMsg+"!</p>");
                    $timeout(function () {
                        $state.go("/registerAndLogin.login");
                    },2000);
                }else if(result.reCode == 1002){
                    $(".ifFail").html(result.reMsg);
                    $(".ifFail").removeClass("hidden");
                    $timeout(function () {
                        $(".ifFail").addClass("hidden");
                    },3000);
                }else if(result.reCode == 1003){
                    $(".ifFail").html(result.reMsg);
                    $(".ifFail").removeClass("hidden");
                    $timeout(function () {
                        $(".ifFail").addClass("hidden");
                    },3000);
                }
            }
        })
    }
    
    $scope.login = function () {
        var pwd = $("#pwd").val();
        var name = $("#name").val();
        console.log(pwd,name);
        $.ajax({
            url:"http://duif.applinzi.com/login.php",
            type:"post",
            data:{
                name: name,
                pwd: pwd,
                email: "648020580@qq.com"
            },
            success: function(req){
                var result = JSON.parse(req);
                console.log(result);
                if(result.reCode == 200){
                    // 将用户登录成功的状态存储在本地

                    // cookie存储  session会话  webstorage本地存储
                    localStorage.name = name;

                    $("main").html("<p class='state'>"+result.reMsg+"!</p>");

                    $timeout(function () {
                        $state.go("/my");
                    },2000);


                }else if(result.reCode == 1002){
                    $(".ifFail").html(result.reMsg);
                    $(".ifFail").removeClass("hidden");
                    $timeout(function () {
                        $(".ifFail").addClass("hidden");
                    },3000);
                }
            }
        })
    }
}]);