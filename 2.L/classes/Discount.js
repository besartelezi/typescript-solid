var Discount = /** @class */ (function () {
    function Discount(type, value) {
        if (value === void 0) { value = 0; }
        this._type = type;
        this._value = value;
        if (this._type != 'none' && value <= 0) {
            throw new Error('You cannot create a ' + this._type + ' discount with a negative value');
        }
    }
    Discount.prototype.apply = function (price) {
        //@todo: instead of using magic values as string in this, it would be a lot better to change them into constant. This would protect us from misspellings. Can you improve this?
        if (this._type === "none") {
            return price;
        }
        else if (this._type === "variable") {
            return (price - (price * this._value / 100));
        }
        else if (this._type === "fixed") {
            return Math.max(0, price - this._value);
        }
        else {
            throw new Error('Invalid type of discount');
        }
    };
    Discount.prototype.showCalculation = function (price) {
        if (this._type === "none") {
            return "No discount";
        }
        else if (this._type === "variable") {
            return price + " € -  " + this._value + "%";
        }
        else if (this._type === "fixed") {
            return price + "€ -  " + this._value + "€ (min 0 €)";
        }
        else {
            throw new Error('Invalid type of discount');
        }
    };
    return Discount;
}());
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
