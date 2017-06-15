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
