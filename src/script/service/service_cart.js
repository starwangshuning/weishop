/**
 * 积分接口
 *
 */
App.factory('CartService', ['$rootScope', '$cookies', '$http', 'locals', function ($rootScope, $cookies, $http, locals) {

    function addShoppingCart(product, callBack) {
        var ShoppingCart = locals.get("ShoppingCart");
        if (ShoppingCart == null || ShoppingCart == "") {
            //第一次加入商品
            var jsonStr = {
                "productList": [{
                    "goodId": product.goodId,
                    "name": product.name,
                    "amount": product.amount,
                    "price": product.price
                }],
                "totalNumber": product.amount,
                "totalAmount": (product.price * product.amount)
            };

            locals.set('ShoppingCart', JSON.stringify(jsonStr));
        } else {
            var jsonStr = JSON.parse(ShoppingCart);
            var productList = jsonStr.productList;

            var result = false;
            //查找购物车中是否有该商品
            for (var i in productList) {
                if (productList[i].goodId == product.goodId) {
                    productList[i].amount = parseInt(productList[i].amount) + parseInt(product.amount);
                    result = true;
                    break;
                }
            }

            if (!result) {
                //没有该商品就直接加进去
                productList.push({
                    "goodId": product.goodId,
                    "name": product.name,
                    "amount": product.amount,
                    "price": product.price
                });
            }
            //重新计算总价
            jsonStr.totalNumber = parseInt(jsonStr.totalNumber) + parseInt(product.amount);
            jsonStr.totalAmount = parseFloat(jsonStr.totalAmount) + (parseInt(product.amount) * parseFloat(product.price));
            //保存购物车
            locals.set('ShoppingCart', JSON.stringify(jsonStr));
            callBack(locals.getObject('ShoppingCart'));
        }
    }

    function updateProductNum(goodId, amount, callBack) {
        var ShoppingCart = locals.get("ShoppingCart");
        var jsonStr = JSON.parse(ShoppingCart);
        var productList = jsonStr.productList;

        for (var i in productList) {
            if (productList[i].goodId == goodId) {
                jsonStr.totalNumber = parseInt(jsonStr.totalNumber) + (parseInt(amount) - parseInt(productList[i].amount));
                jsonStr.totalAmount = parseFloat(jsonStr.totalAmount) + ((parseInt(amount) * parseFloat(productList[i].price)) - parseInt(productList[i].amount) * parseFloat(productList[i].price));
                productList[i].amount = parseInt(amount);
                utils.setParam("ShoppingCart", JSON.stringify(jsonStr));
                return;
            }
        }
        callBack(locals.getObject('ShoppingCart'));
    }

    function getProductList(callBack) {
        callBack(locals.getObject('ShoppingCart'));
    }

    function existProduct(goodId , callBack) {
        var ShoppingCart = locals.get("ShoppingCart");
        var jsonStr = JSON.parse(ShoppingCart);
        var productList = jsonStr.productList;
        var result = false;
        for (var i in productList) {
            if (productList[i].goodId == goodId) {
                result = true;
            }
        }
        callBack(result);
    }

    function deleteProduct(goodId, callBack) {
        var ShoppingCart = locals.get("ShoppingCart");
        var jsonStr = JSON.parse(ShoppingCart);
        var productList = jsonStr.productList;
        var list = [];
        for (var i in productList) {
            if (productList[i].goodId == goodId) {
                jsonStr.totalNumber = parseInt(jsonStr.totalNumber) - parseInt(productList[i].num);
                jsonStr.totalAmount = parseFloat(jsonStr.totalAmount) - parseInt(productList[i].num) * parseFloat(productList[i].price);
            } else {
                list.push(productList[i]);
            }
        }
        jsonStr.productList = list;

        callBack(locals.getObject('ShoppingCart'));
    }

    return {
        //加入购物车
        addShoppingCart: function (product, callBack) {
            addShoppingCart(product, callBack);
        },
        //修改给买商品数量
        updateProductNum: function (goodId, amount, callBack) {
            updateProductNum(goodId, amount, callBack);
        },
        //获取购物车中的所有商品
        getProductList: function ( callBack) {
            getProductList(callBack);
        },
        //判断购物车中是否存在商品
        existProduct: function ( goodId , callBack) {
            existProduct(goodId,callBack);
        },
        //删除购物车中商品
        deleteProduct: function (goodId, callBack) {
            deleteProduct(goodId,callBack);
        }

    }
}]);
