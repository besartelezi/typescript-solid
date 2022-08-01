"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gorilla = void 0;
var Gorilla = /** @class */ (function () {
    function Gorilla() {
    }
    Object.defineProperty(Gorilla.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gorilla.prototype, "type", {
        get: function () {
            return 'gorilla';
        },
        enumerable: false,
        configurable: true
    });
    Gorilla.prototype.makeSound = function () {
        return "Life's but a walking shadow, a poor player that struts and frets his hour upon the stage and is heard no more. It is a tale told by an idiot, full of sound and fury, signifying nothing.";
    };
    return Gorilla;
}());
exports.Gorilla = Gorilla;
