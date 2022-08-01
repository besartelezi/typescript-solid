var shoppingBasket = /** @class */ (function () {
    function shoppingBasket() {
        //this array only accepts Product objects, nothing else
        this._products = [];
    }
    Object.defineProperty(shoppingBasket.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: false,
        configurable: true
    });
    shoppingBasket.prototype.addProduct = function (product) {
        this._products.push(product);
    };
    return shoppingBasket;
}());
