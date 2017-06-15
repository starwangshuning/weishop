/**
 * Created by zongsw on 2016/11/24.
 */
/**
 *  积分
 */
App.controller("ExampleIndexController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "ExampleService", "ConfigUtil", "StringUtil", function ($scope, $location, $ionicPopup, $ionicLoading, ExampleService, ConfigUtil, StringUtil) {
    document.title = "我的积分";
    var loginObj   = ConfigUtil.getCustomerLogin();
    console.info("ExampleIndexController - 判断是否已经登录");

    //ExampleService.getExampleWithHomeByCustomerId(loginObj, function (data) {
    //    console.info("getExampleWithHomeByCustomerId - " + JSON.stringify(data));
    //});


    // 积分列表
    $scope.dataList  = [];
    $scope.pageNow   = 1;
    $scope.pageSize  = 5;
    $scope.pageTotal = 0;

    $scope.doRefresh = function () {
        $scope.pageNow  = 1;
        $scope.dataList = [];
        $scope.getList();
    };

    $scope.doLoadMore = function () {
        $scope.pageNow = $scope.pageNow + 1;
        $scope.getList();
    };
    $scope.getList    = function () {
        $ionicLoading.show();

        setTimeout(function () {
            $ionicLoading.hide();
        },1000);

        ExampleService.getExampleDetailWithHomeByCustomerId({
            pageSize: $scope.pageSize,
            pageNow: $scope.pageNow
        }, function (result) {
            $ionicLoading.hide();
            $scope.$broadcast("scroll.refreshComplete");
            $scope.$broadcast("scroll.infiniteScrollComplete");
            console.log(result);
            for (var i = 0; i<result.length; i++) {
                $scope.dataList.push(result[i]);
            }

        });
    };

    $scope.moreDataCanBeLoaded = function(){

        if ( 1 || $scope.pageNow < $scope.pageTotal ) {//判断如果当前页没达到总页数，那么可以进行上拉加载
            return true;
        } else {
            return false;
        }
    };
    $scope.doRefresh();

}])

    .controller("ExampleListController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "ExampleService", "ConfigUtil", "StringUtil", function ($scope, $location, $ionicPopup, $ionicLoading, ExampleService, ConfigUtil, StringUti) {
        document.title = "积分明细";
        var loginObj   = ConfigUtil.getCustomerLogin();
        console.info("ExampleListController - loginObj=" + loginObj);
        if (loginObj == null || typeof (loginObj.isHaveMembership) == 'undefined' || !loginObj.isHaveMembership) {
            $location.path("login_auto/point_list");
            console.info("ExampleListController - goto login_auto");
            return;
        }

        $scope.dataList  = [];
        $scope.pageNow   = 1;
        $scope.pageSize  = 5;
        $scope.pageTotal = 0;

        $scope.doRefresh = function () {
            $scope.pageNow  = 1;
            $scope.dataList = [];
            $scope.getList();
        };

        $scope.doLoadMore = function () {
            $scope.pageNow = $scope.pageNow + 1;
            $scope.getList();
        };
        $scope.getList    = function () {
            $ionicLoading.show();
            ExampleService.getExampleDetailWithHomeByCustomerId({
                customerId: loginObj.customerId,
                pageSize: $scope.pageSize,
                pageNow: $scope.pageNow
            }, function (result) {
                $ionicLoading.hide();
                $scope.$broadcast("scroll.refreshComplete");
                $scope.$broadcast("scroll.infiniteScrollComplete");
                if (result.success && result.data != null) {
                    $scope.pageNow   = result.data.pageNow;
                    $scope.pageTotal = result.data.pageTotal;
                    for (var i = 0; i < result.data.beanList.length; i++) {
                        result.data.beanList[i].monthLabel = result.data.beanList[i].tackTime.substring(5, 10).replace('-', '/');
                        $scope.dataList.push(result.data.beanList[i]);
                    }
                }
                console.info("getList - " + $scope.dataList.length);
            });
        };

        $scope.moreDataCanBeLoaded = function () {
            if ($scope.pageNow < $scope.pageTotal) {
                return true;
            } else {
                return false;
            }
        };
        $scope.doRefresh();
    }]);




