/**
 * Created by zongsw on 2016/11/24.
 */
/**
 *  积分
 */
App.controller("CategoryIndexController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "CategoryService", "ConfigUtil", "StringUtil", function ($scope, $location, $ionicPopup, $ionicLoading, CategoryService, ConfigUtil, StringUtil) {
    document.title = "分类列表";
    //var loginObj   = ConfigUtil.getCustomerLogin();
    //console.info("ExampleIndexController - 判断是否已经登录");

    // 积分列表
    $scope.dataList = [];

    $scope.doRefresh = function () {
        $scope.getList();
    };

    $scope.getList    = function () {
        $ionicLoading.show();

        setTimeout(function () {
            $ionicLoading.hide();
        },1000);

        CategoryService.getAllCategory(
            function (result) {
            $ionicLoading.hide();
            $scope.$broadcast("scroll.refreshComplete");
            $scope.$broadcast("scroll.infiniteScrollComplete");
            console.log(result);
            for (var i = 0; i<result.length; i++) {
                $scope.dataList.push(result[i]);
            }

        });
    };

    $scope.doRefresh();

}]);
