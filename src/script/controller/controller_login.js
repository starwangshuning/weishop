/**
 *  登录
 */
App.controller("CustomerLoginController", ["$scope", "$location", "$ionicPopup", "$stateParams", "$window", "ConfigUtil", "StringUtil",'WechatService', function ($scope, $location, $ionicPopup, $stateParams, $window, ConfigUtil, StringUtil, WechatService) {
    document.title = "登录";
    var openId = ConfigUtil.getStore("openId");

    $scope.doLogin = function () {
        console.log('用户登录方法');

        $location.path('/category_index');
    };

    $scope.clickRefresh = function () {
        $window.location.reload();
    };

}]);



