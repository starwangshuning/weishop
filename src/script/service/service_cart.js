/**
 * 积分接口
 *
 */
App.factory('CartService', ['$rootScope', '$cookies', '$http', 'localStorageUtil', function ($rootScope, $cookies, $http, localStorageUtil) {

    function addShoppingCart(product, callBack) {
        var ShoppingCart = localStorageUtil.get("ShoppingCart");
        if (ShoppingCart == null || ShoppingCart == "" || ShoppingCart == false) {
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

            localStorageUtil.set('ShoppingCart', JSON.stringify(jsonStr));
        } else {
            var jsonStr     = JSON.parse(ShoppingCart);
            var productList = jsonStr.productList;

            var result = false;
            //查找购物车中是否有该商品
            for (var i in productList) {
                if (productList[i].goodId == product.goodId) {
                    productList[i].amount = parseInt(productList[i].amount) + parseInt(product.amount);
                    result                = true;
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
            jsonStr.totalNumber = parseInt(Number(jsonStr.totalNumber)) + parseInt(product.amount);
            jsonStr.totalAmount = parseFloat(Number(jsonStr.totalAmount)) + (parseInt(product.amount) * parseFloat(product.price));
            //保存购物车
            localStorageUtil.set('ShoppingCart', JSON.stringify(jsonStr));
        }
        callBack(localStorageUtil.getObject('ShoppingCart'));
    }

    function updateProductNum(goodId, amount, callBack) {
        var ShoppingCart = localStorageUtil.get("ShoppingCart");
        var jsonStr      = JSON.parse(ShoppingCart);
        var productList  = jsonStr.productList;

        for (var i in productList) {
            if (productList[i].goodId == goodId) {
                jsonStr.totalNumber   = parseInt(jsonStr.totalNumber) + (parseInt(amount) - parseInt(productList[i].amount));
                jsonStr.totalAmount   = parseFloat(jsonStr.totalAmount) + ((parseInt(amount) * parseFloat(productList[i].price)) - parseInt(productList[i].amount) * parseFloat(productList[i].price));
                productList[i].amount = parseInt(amount);
                localStorageUtil.set("ShoppingCart", JSON.stringify(jsonStr));
                break;
            }
        }
        callBack(localStorageUtil.getObject('ShoppingCart'));
    }

    function getProductList(callBack) {
        callBack(localStorageUtil.getObject('ShoppingCart'));
    }

    function existProduct(goodId, callBack) {
        var ShoppingCart = localStorageUtil.get("ShoppingCart");
        var jsonStr      = JSON.parse(ShoppingCart);
        var productList  = jsonStr.productList;
        var result       = false;
        for (var i in productList) {
            if (productList[i].goodId == goodId) {
                result = true;
            }
        }
        callBack(result);
    }

    function deleteProduct(goodId, callBack) {
        var ShoppingCart = localStorageUtil.get("ShoppingCart");
        var jsonStr      = JSON.parse(ShoppingCart);
        var productList  = jsonStr.productList;
        var list         = [];
        for (var i in productList) {
            if (productList[i].goodId == goodId) {
                jsonStr.totalNumber = parseInt(jsonStr.totalNumber) - parseInt(productList[i].amount);
                jsonStr.totalAmount = parseFloat(jsonStr.totalAmount) - parseInt(productList[i].amount) * parseFloat(productList[i].price);
            } else {
                list.push(productList[i]);
            }
        }
        jsonStr.productList = list;
        localStorageUtil.set("ShoppingCart", JSON.stringify(jsonStr));
        callBack(localStorageUtil.getObject('ShoppingCart'));
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
        getProductList: function (callBack) {
            getProductList(callBack);
        },
        //判断购物车中是否存在商品
        existProduct: function (goodId, callBack) {
            existProduct(goodId, callBack);
        },
        //删除购物车中商品
        deleteProduct: function (goodId, callBack) {
            deleteProduct(goodId, callBack);
        }

    }
}]);
