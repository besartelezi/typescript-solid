"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discount = void 0;
var Discount = /** @class */ (function () {
    function Discount(_value) {
        if (_value === void 0) { _value = 0; }
        this._value = _value;
    }
    Discount.prototype.apply = function (price) {
        return price;
    };
    Discount.prototype.showCalculation = function (price) {
        return "No specific discount was selected";
    };
    return Discount;
}());
exports.Discount = Discount;
