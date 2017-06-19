/**
 * Created by zongsw on 2016/11/24.
 */
//日志
App.factory('logger', [function () {
    return {
        info: function (val) {
            if (IS_DEBUG == 1) {
                console.info(val);
            }
        },
        error: function (val) {
            console.error(val);
        }
    };
}])
//本地存储数据===================================
    .factory('localStorageUtil', ['$window', function ($window) {
        return {        //存储单个属性
            set: function (key, value) {
                localStorage.setItem(key, value);
            },        //读取单个属性
            get: function (key) {
                return localStorage.getItem(key);
            },        //存储对象，以JSON格式存储
            setObject: function (key, value) {
                localStorage.setItem(key, JSON.stringify(value));
            },        //读取对象
            getObject: function (key) {
                return JSON.parse(localStorage.getItem(key));
            },
            delete: function (key) {
                localStorage.removeItem(key);
            }

        }
    }])
;
