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

    $scope.getList = function () {
        $ionicLoading.show();

        setTimeout(function () {
            $ionicLoading.hide();
        }, 1000);

        CategoryService.getAllCategory(
            function (result) {
                $ionicLoading.hide();
                $scope.$broadcast("scroll.refreshComplete");
                $scope.$broadcast("scroll.infiniteScrollComplete");
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    $scope.dataList.push(result[i]);
                }

            });
    };

    $scope.doRefresh();


    // slider images
    $scope.slides   = [
        {
            url: 'img/slide_1.jpg'
        },
        {
            url: 'img/slide_2.jpg'
        },
        {
            url: 'img/slide_3.jpg'
        }
    ];
    $scope.products = [
        {
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
        },
        {
            id: 2,
            name: "Mango shirt",
            price: 30,
            sale_price: null,
            thumb: "img/list/p_2.jpg",
            images: [
                "img/detail/d_1.jpg",
                "img/detail/d_2.jpg",
                "img/detail/d_3.jpg"
            ]
        },
        {
            id: 3,
            name: "Zara shirt",
            price: 30,
            sale_price: null,
            thumb: "img/list/p_3.jpg",
            images: [
                "img/detail/d_1.jpg",
                "img/detail/d_2.jpg",
                "img/detail/d_3.jpg"
            ]
        },
        {
            id: 4,
            name: "Mango shirt",
            price: 30,
            sale_price: 20,
            thumb: "img/list/p_4.jpg",
            images: [
                "img/detail/d_1.jpg",
                "img/detail/d_2.jpg",
                "img/detail/d_3.jpg"
            ]
        },
        {
            id: 5,
            name: "Zara shirt",
            price: 30,
            sale_price: 20,
            thumb: "img/list/p_5.jpg",
            images: [
                "img/detail/d_1.jpg",
                "img/detail/d_2.jpg",
                "img/detail/d_3.jpg"
            ]
        },
        {
            id: 6,
            name: "Zara shirt",
            price: 30,
            sale_price: null,
            thumb: "img/list/p_6.jpg",
            images: [
                "img/detail/d_1.jpg",
                "img/detail/d_2.jpg",
                "img/detail/d_3.jpg"
            ]
        },
    ];

}]);
