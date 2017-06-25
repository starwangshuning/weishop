App.controller("GoodsIndexController", ["$scope", "$location", "$state", "$ionicPopup", "$ionicLoading", "GoodsService", "CartService", "ConfigUtil", "StringUtil", function ($scope, $location, $state, $ionicPopup, $ionicLoading, GoodsService, CartService, ConfigUtil, StringUtil) {
    document.title = "商品列表";
    $scope.search       = {};
    $scope.shoppingCart = {};//购物车列表
    $scope.productList  = {};//商品列表


    //获取商品列表
    // GoodsService.getList(function (data) {
    //     $scope.productList = data;
    // });

    //获取购物车信息
    CartService.getProductList(function (data) {
        if(data){
            $scope.shoppingCart = data;
        }
        if (!$scope.shoppingCart.totalNumber) {
            $scope.shoppingCart.totalNumber = 0;
        }
    });

    //加入购物车
    $scope.addCart = function (product) {
        product.amount = 1;
        CartService.addShoppingCart(product, function (data) {
            $scope.shoppingCart = data;
            console.log($scope.shoppingCart);
        });
    };

    //排序筛选
    $scope.sort = function (_this) {
        $scope.search.sortName = _this.target.getAttribute('data-name');
        var sortType = _this.target.getAttribute('data-type');
        var idName = '#sort-' + $scope.search.sortName;
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



    //商品详情
    $scope.detail = function (goodId) {
        console.log(goodId);
        $state.go('goods_detail', {goodId: goodId});
    };


}])

    .controller("GoodsDetailController", ["$scope", "$location", "$state", "$ionicPopup", "$ionicLoading", "GoodsService", "CartService", "ConfigUtil", "StringUtil", function ($scope, $location, $state, $ionicPopup, $ionicLoading, GoodsService, CartService, ConfigUtil, StringUtil) {
        document.title = "商品详情";
        $scope.shoppingCart   = {};
        $scope.productDetail  = {};//商品详情
        $scope.productDetail.amount = 1;
        $scope.productDetail.price  = 100;
        $scope.productDetail.name  = '植物';
        $scope.productDetail.goodId  = $state.params.goodId;

        $scope.goodId = $state.params.goodId;

        CartService.getProductList(function (data) {
            if(data){
                $scope.shoppingCart = data;
            }
            if (!$scope.shoppingCart.totalNumber) {
                $scope.shoppingCart.totalNumber = 0;
            }
        });
        console.log($scope.shoppingCart);

        //获取商品详情
        // GoodsService.getList( $scope.goodId , function (data) {
        //     $scope.productDetail = data;
        // });

        $scope.plus = function (_this) {
            $scope.productDetail.amount += 1;
            if ($scope.productDetail.amount > 1) {
                $(_this.target).prev().prev().removeClass('no-minus').addClass('minus');
            }
        };

        $scope.minus = function (_this) {
            if ($scope.productDetail.amount == 1) {
                return false;
            }
            $scope.productDetail.amount -= 1;
            if ($scope.productDetail.amount == 1) {
                $(_this.target).removeClass('minus').toggleClass('no-minus');
            }
        };

        //加入购物车
        $scope.addCart = function (product) {
            CartService.addShoppingCart(product, function (data) {
                $scope.shoppingCart = data;
            });
        };

        $scope.buy = function (product) {
            CartService.addShoppingCart(product, function (data) {
                $scope.shoppingCart = data;
            });
            $state.go('order_submit');

        }

    }])


    .controller("GoodsCartController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "GoodsService", "CartService", "ConfigUtil", "StringUtil", "localStorageUtil", function ($scope, $location, $ionicPopup, $ionicLoading, GoodsService, CartService, ConfigUtil, StringUtil, localStorageUtil) {
        document.title = "购物车";
        $scope.shoppingCart = {};
        // localStorage.clear();
        CartService.getProductList(function (data) {
            if(data){
                $scope.shoppingCart = data;
            }
            if (!$scope.shoppingCart.totalNumber) {
                $scope.shoppingCart.totalNumber = 0;
            }
        });

        console.log($scope.shoppingCart);

        $scope.delGood = function (goodId) {
            CartService.deleteProduct(goodId, function (data) {
                $scope.shoppingCart = data;
            })
        };


        $scope.plus = function (_this, product) {
            product.amount = 1;
            if (product.amount > 1) {
                $(_this.target).prev().prev().removeClass('no-minus').addClass('minus');
            }
            CartService.addShoppingCart(product, function (data) {
                $scope.shoppingCart = data;
            });
        };

        $scope.minus = function (_this, product) {
            if (product.amount == 1) {
                return false;
            }
            product.amount -= 1;
            if (product.amount == 1) {
                $(_this.target).removeClass('minus').toggleClass('no-minus');
            }
            CartService.updateProductNum(product.goodId, product.amount, function (data) {
                $scope.shoppingCart = data;
            })
        };

    }]);