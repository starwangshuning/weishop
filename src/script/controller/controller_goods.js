/**
 * Created by zongsw on 2016/11/24.
 */
/**
 *  积分
 */
App.controller("GoodsIndexController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "GoodsService", "ConfigUtil", "StringUtil", function ($scope, $location, $ionicPopup, $ionicLoading, GoodsService, ConfigUtil, StringUtil) {
    document.title = "商品列表";


}])
    .controller("GoodsDetailController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "GoodsService", "ConfigUtil", "StringUtil", function ($scope, $location, $ionicPopup, $ionicLoading, GoodsService, ConfigUtil, StringUtil) {
        document.title = "商品详情";


    }]);