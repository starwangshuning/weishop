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
        $scope.product = {
            id: 1,
            name: "Zara shirt",
            price: 30,
            sale_price: 20,
            thumb: "img/list/p_1.jpg",
            images: [
                "img/detail/d_1.jpg",
                "img/detail/d_2.jpg",
                "img/detail/d_3.jpg"
            ],
            description: "Due to Christmas Time, the returns/exchanges period for orders placed between the 27th of November and the 17th of December will be extended until the 17th of January.",
            reviews: [
                {
                    avatar: "img/avatar.jpg",
                    name: "Slimer",
                    content: "This product is good",
                    stars: 4
                }
            ]
        };

        // generate array from number
        $scope.range = function(n) {
            return new Array(n);
        };

    }])
    .controller("GoodsCartController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "GoodsService", "ConfigUtil", "StringUtil", function ($scope, $location, $ionicPopup, $ionicLoading, GoodsService, ConfigUtil, StringUtil) {
    document.title = "购物车";


}]);