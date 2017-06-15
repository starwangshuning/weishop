/**
 * 积分接口
 *
 */
App.factory('CategoryService', ['$rootScope', '$cookies', '$http', 'ConfigUtil', function ($rootScope, $cookies, $http, ConfigUtil) {

    function getExampleWithHomeByCustomerId(form, callBack) {
        console.info("ExampleService - getExampleWithHomeByCustomerId - " + JSON.stringify(form));
        var url       = ConfigUtil.SERVICE_TEST_URL + "www.baidu.com";
        var data      = {

            };
        var transFn   = function (data) {
                return $.param(data);
            };
        var postCfg   = {
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                transformRequest: transFn
            };
        $http.post(url, data, postCfg).success(function (data, status, headers, config) {
            console.info('ExampleService - getExampleWithHomeByCustomerId - return - ' + JSON.stringify(data));
            callBack(data);
        });
    }

    function getAllCategory(callBack) {
        var data =[
            {'name': 't1',  'id': 1},
            {'name': 't2',  'id': 2},
            {'name': 't2',  'id': 3}
        ];
        callBack(data);
    }

    return {

        getAllCategory: function (callBack) {
            getAllCategory(callBack);
        }

    }
}]);
