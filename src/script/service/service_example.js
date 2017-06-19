/**
 * 积分接口
 *
 */
App.factory('ExampleService', ['$rootScope', '$cookies', '$http', 'ConfigUtil', function ($rootScope, $cookies, $http, ConfigUtil) {

    function getExampleWithHomeByCustomerId(form, callBack) {
        console.info("ExampleService - getExampleWithHomeByCustomerId - " + JSON.stringify(form));
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

    function getExampleDetailWithHomeByCustomerId(id, callBack) {
        var data = [
            {'name': 't1', 'age': 101, 'id': id},
            {'name': 't2', 'age': 102, 'id': id}
        ];
        callBack(data);
    }

    return {

        getExampleWithHomeByCustomerId: function (params, callBack) {
            getExampleWithHomeByCustomerId(params, callBack);
        },
        getExampleDetailWithHomeByCustomerId: function (id, callBack) {
            getExampleDetailWithHomeByCustomerId(id, callBack);
        }

    }
}]);
