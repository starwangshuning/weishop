/** 订单服务
 *
 * 1.获得订单列表
 * 2.获得订单详情
 * 3.下单
 * 4.修改订单收货信息
 *
 */
App.factory('WechatService', ['$rootScope', '$cookies', '$http', 'ConfigUtil',
    function ($rootScope, $cookies, $http, ConfigUtil) {

        function getJsTicket(currentUrl, callBack) {
            var url     = ConfigUtil.SERVICE_WXADMIN + 'getJsTicket',
                data    = {
                    'currentUrl': currentUrl,
                    'weiPhpToken': ConfigUtil.WEIPHP_TOKEN
                },
                transFn = function (data) {
                    return $.param(data);
                },
                postCfg = {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                    transformRequest: transFn
                };

            $http.post(url, data, postCfg).success(function (data, status, headers, config) {
                callBack(data);
            })
        }


        return {
            getJsTicket: function (currentUrl, callBack) {
                getJsTicket(currentUrl, callBack);
            }
        }
    }]);
