// Ionic Starter App

var App = angular.module('starter', ['ionic', 'ngResource', 'ngCookies', 'ionicLazyLoad'])

    .run(['$ionicPlatform', '$rootScope', '$location', '$cookieStore', '$state', '$log', 'ConfigUtil', function ($ionicPlatform, $rootScope, $location, $cookieStore, $state, $log, ConfigUtil) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });

        //可以做自动登录

        //当模板解析开始
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            //console.info("$stateChangeStart - event=" + event + " ,toState=" + toState + " ,toParams=" + toParams + " ,fromState=" + fromState + " ,fromParams=" + fromParams);
        });

        //当模板解析完成后触发
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            //console.info("$stateChangeSuccess - event=" + event + " ,toState=" + toState + " ,toParams=" + toParams + " ,fromState=" + fromState + " ,fromParams=" + fromParams);
        });

    }])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'user/login.html',
                controller: 'CustomerLoginController',
                cache: false
            })

            .state('user_index', {
                url: '/user_index',
                templateUrl: 'user/user_index.html',
                controller: 'UserIndexController',
                cache: false
            })

            .state('category_index', {
                url: '/category_index',
                templateUrl: 'category/category_index.html',
                controller: 'CategoryIndexController',
                cache: false
            })

            .state('goods_index', {
                url: '/goods_index',
                templateUrl: 'goods/goods_index.html',
                controller: 'GoodsIndexController',
                cache: false
            })

            .state('goods_detail', {
                url: '/goods_detail',
                templateUrl: 'goods/goods_detail.html',
                controller: 'GoodsDetailController',
                cache: false
            })

            .state('goods_cart', {
                url: '/goods_cart',
                templateUrl: 'goods/goods_cart.html',
                controller: 'GoodsCartController',
                cache: false
            })

            .state('order_index', {
                url: '/order_index',
                templateUrl: 'order/order_index.html',
                controller: 'OrderIndexController',
                cache: false
            })

            .state('order_submit', {
                url: '/order_submit',
                templateUrl: 'order/order_submit.html',
                controller: 'OrderSubmitController',
                cache: false
            })

            .state('order_detail', {
                url: '/order_detail',
                templateUrl: 'order/order_detail.html',
                controller: 'OrderDetailController',
                cache: false
            })

            .state('example_index', {
                url: '/example_index',
                templateUrl: 'example/example_index.html',
                controller: 'ExampleIndexController',
                cache: false
            })
            .state('example_list', {
                url: '/example_list',
                templateUrl: 'example/example_list.html',
                controller: 'ExampleListController',
                cache: false
            })
            .state('example_consume', {
                url: '/example_consume',
                templateUrl: 'example/example_consume.html',
                controller: 'ExampleConsumeController',
                cache: false
            });

        $urlRouterProvider.otherwise('/goods_detail');//默认跳转路径

    })
    //拦截器
    .factory('myInterceptor', ['$injector', '$location', '$q', 'ConfigUtil', 'StringUtil', function ($injector, $location, $q, ConfigUtil, StringUtil) {
        return {
            request: function (config) {

                console.info("request - this is angular myInterceptor, contact shuning ");
                return config || $q.when(config);
            },

            'requestError': function (rejection) {
                console.error("requestError - this is angular myInterceptor, contact shuning ");
                return $q.reject(rejection);
            },

            'response': function (response) {
                return response;
            },

            'responseError': function (rejection) {
                console.error('responseError - this is angular myInterceptor, contact shuning ');
                $injector.get('$ionicLoading').show({template: '网络请求错误！', duration: 800, noBackdrop: true});
                return $q.reject(rejection);
            }
        };
    }])

    //加载连接器
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('myInterceptor');
    }]);


