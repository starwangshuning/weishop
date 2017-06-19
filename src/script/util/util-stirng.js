/**
 * Created by zongsw on 2016/11/24.
 */
App.factory('StringUtil', [function () {
    return {
        trim: function (o) {
            if (this.isEmpty(o)) {
                return '';
            }

            o = o.replace(/(^\s*)|(\s*$)/g, '');
            return o;
        },
        isEmpty: function (o) {
            if (o === null || o === "null" || o === undefined || o === "undefined" || o === "") {
                return true;
            } else {
                return false;
            }
        },
        upcaseFirst: function (str) {
            var first  = str.substring(0, 1).toUpperCase();
            var others = str.substring(1, str.length);
            var ret    = first + others;
            return ret;
        },
        isMobile: function (val) {
            var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if (typeof(val) == 'undefined' || val == '' || val == 'null' || val.length <= 0 || !myreg.test(val)) {
                return false;
            }
            return true;
        },
        isCardNo: function (card) {
            // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (typeof(card) == 'undefined' || card == '' || card == 'null' || card.length <= 0 || reg.test(card) === false) {
                return false;
            }
            return true;
        },
        //生成uuid
        uuid: function (len, radix) {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            var uuid  = [], i;
            radix     = radix || chars.length;

            if (len) {
                // Compact form
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
            } else {
                // rfc4122, version 4 form
                var r;

                // rfc4122 requires these characters
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';

                // Fill in random data.  At i==19 set the high bits of clock sequence as
                // per rfc4122, sec. 4.1.5
                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r       = 0 | Math.random() * 16;
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
        }
    };
}])
