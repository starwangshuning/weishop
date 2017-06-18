
App.controller("GoodsIndexController", ["$scope", "$location", "$state", "$ionicPopup", "$ionicLoading", "GoodsService", "CartService", "ConfigUtil", "StringUtil" , function ($scope, $location, $state, $ionicPopup, $ionicLoading, GoodsService, CartService,ConfigUtil, StringUtil) {
    document.title = "商品列表";
    $scope.search = {};
    //排序筛选
    $scope.sort = function (_this) {
        $scope.search.sortName = _this.target.getAttribute('data-name');
        var sortType = _this.target.getAttribute('data-type');
        var idName = '#sort-' + $scope.sortName;
        if (sortType == 'asc') {
            $scope.search.sortType = 'desc';
            _this.target.setAttribute('data-type', 'desc');
            $(idName).removeClass('ion-arrow-up-a').addClass('ion-arrow-down-a');
        } else {
            $scope.search.sortType = 'asc';
            _this.target.setAttribute('data-type', 'asc');
            $(idName).removeClass('ion-arrow-down-a').addClass('ion-arrow-up-a');
        }

        console.log($scope.search);

        $('.sort').removeClass('sort_select');
        $(_this.target).toggleClass('sort_select');
    };

    $scope.searchByName = function () {
        console.log($scope.search);
    };


    //加入购物车
    $scope.addCart = function (goodId) {
        // locals.delete('ShoppingCart');
        //获取商品详情
        $scope.product = {};
        $scope.product.goodId = goodId;
        $scope.product.amount = 1;
        $scope.product.price = 99;
        $scope.product.name = '商品名称';

        CartService.addShoppingCart($scope.product,function (data) {
            console.log(data);
        });
    };

    //商品详情
    $scope.detail = function (goodId) {
        console.log(goodId);
        $state.go('goods_detail', {goodId: goodId});
    };


}])

    .controller("GoodsDetailController", ["$scope", "$location", "$state", "$ionicPopup", "$ionicLoading", "GoodsService","CartService" ,"ConfigUtil", "StringUtil", function ($scope, $location, $state, $ionicPopup, $ionicLoading, GoodsService, CartService, ConfigUtil, StringUtil) {
        document.title = "商品详情";
        $scope.product = {};
        $scope.product.goodId = $state.params.goodId;
        $scope.product.amount = 1;
        $scope.product.price = 99;
        $scope.product.name = '商品名称';

        console.log($scope.product);
        $scope.plus = function (_this) {
            $scope.product.amount += 1;
        };

        $scope.minus = function (_this) {
            if ($scope.product.amount == 0) {
                return 0;
            }
            $scope.product.amount -= 1;
            if ($scope.product.amount == 0) {
                $(_this.target).removeClass('minus').toggleClass('no-minus');
            }
        };

        //加入购物车
        $scope.addCart = function () {
            CartService.addShoppingCart($scope.product,function (data) {
                console.log(data);
            });
        };

    }])


    .controller("GoodsCartController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "GoodsService", "ConfigUtil", "StringUtil", "locals", function ($scope, $location, $ionicPopup, $ionicLoading, GoodsService, ConfigUtil, StringUtil, locals) {
        document.title = "购物车";


    }]);