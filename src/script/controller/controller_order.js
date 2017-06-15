/**
 * Created by zongsw on 2016/11/24.
 */
/**
 *  积分
 */
App.controller("OrderIndexController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "OrderService", "ConfigUtil", "StringUtil", function ($scope, $location, $ionicPopup, $ionicLoading, OrderService, ConfigUtil, StringUtil) {
    document.title = "订单列表";
    $scope.orderList = [
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

}])
    .controller("OrderSubmitController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "OrderService", "ConfigUtil", "StringUtil", function ($scope, $location, $ionicPopup, $ionicLoading, OrderService, ConfigUtil, StringUtil) {
        document.title = "提交订单";


    }])
    .controller("OrderDetailController", ["$scope", "$location", "$ionicPopup", "$ionicLoading", "OrderService", "ConfigUtil", "StringUtil", function ($scope, $location, $ionicPopup, $ionicLoading, OrderService, ConfigUtil, StringUtil) {
        document.title = "订单详情";
        $scope.order = [
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