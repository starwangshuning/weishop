/**
 * 积分接口
 *
 */
App.factory('UserService', ['$rootScope', '$cookies', '$http', 'ConfigUtil', function ($rootScope, $cookies, $http, ConfigUtil) {

    function getExampleWithHomeByCustomerId(form, callBack) {
        console.info("UserService - getExampleWithHomeByCustomerId - " + JSON.stringify(form));
        var url     = ConfigUtil.SERVICE_TEST_URL + "www.baidu.com";
        var data    = {};
        var transFn = function (data) {
            return $.param(data);
        };
        var postCfg = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transFn
        };
        $http.post(url, data, postCfg).success(function (data, status, headers, config) {
            console.info('ExampleService - getExampleWithHomeByCustomerId - return - ' + JSON.stringify(data));
            callBack(data);
        });
    }


    return {

        getExampleWithHomeByCustomerId: function (params, callBack) {
            getExampleWithHomeByCustomerId(params, callBack);
        }

    }
}]);
