/**
 * Created by zongsw on 2016/11/24.
 */
/**
 *  积分
 */
App.controller("OrderIndexController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "OrderService", "ConfigUtil", "StringUtil", function ($scope, $location, $ionicPopup, $ionicLoading, OrderService, ConfigUtil, StringUtil) {
    document.title = "订单列表";


}])
    .controller("OrderSubmitController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "OrderService", "ConfigUtil", "StringUtil", function ($scope, $location, $ionicPopup, $ionicLoading, OrderService, ConfigUtil, StringUtil) {
        document.title = "提交订单";


    }])
    .controller("OrderDetailController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "OrderService", "ConfigUtil", "StringUtil", function ($scope, $location, $ionicPopup, $ionicLoading, OrderService, ConfigUtil, StringUtil) {
        document.title = "订单详情";


    }]);