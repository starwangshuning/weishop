var IS_DEBUG = 1;

App.factory('ConfigUtil', ['$location', function ($location) {
    var ApiVer = 'v1.0.0';

    var AccessToken  = 'f0d8f6c4810e9034';
    var PlatformCode = '120000';

    //防止两个公众号冲突问题
    var WECHAT_APPID = "wxbca664236c089e03-yanzheng";
    var WEIPHP_ID    = 154;
    var WEIPHP_TOKEN = "gh_052139f401e0";

    //接口地址
    var SERVICE_TEST_URL = "http://"

    return {
        WECHAT_APPID: WECHAT_APPID,
        AccessToken: AccessToken,
        PlatformCode: PlatformCode,
        WEIPHP_TOKEN: WEIPHP_TOKEN,
        WEIPHP_ID: WEIPHP_ID,
        SERVICE_TEST_URL: SERVICE_TEST_URL,

        setCustomerString: function (val) {
            localStorage['CustomerString-' + WECHAT_APPID] = val;
        },

        //获取登录的用户信息
        getCustomerLogin: function () {
            //if (typeof(localStorage['CustomerString-' + WECHAT_APPID]) == 'undefined' || localStorage['CustomerString-' + WECHAT_APPID] == "") {
            //    return null;
            //} else {
            //    var obj = eval("(" + localStorage['CustomerString-' + WECHAT_APPID] + ")");
            //    if (obj == null || obj.customerId == null || typeof(obj.customerId) == 'undefined') {
            //        return null;
            //    } else {
            //        return obj;
            //    }
            //}
        },

        setStore: function (key, val) {
            localStorage[key + '-' + WECHAT_APPID] = val;
        },

        getStore: function (key) {
            return localStorage[key + '-' + WECHAT_APPID];
        }

    };
}])
//本地存储数据===================================
.factory('locals',['$window',function($window){
    return{        //存储单个属性
        set :function(key,value){
            localStorage.setItem(key,value);
        },        //读取单个属性
        get:function(key){
            return  localStorage.getItem(key);
        },        //存储对象，以JSON格式存储
        setObject:function(key,value){
            localStorage.setItem(key,JSON.stringify(value));
        },        //读取对象
        getObject: function (key) {
            return JSON.parse(localStorage.getItem(key));
        },
        delete:function (key) {
            localStorage.removeItem(key);
        }

    }
}]);


