"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
var Engine = /** @class */ (function () {
    function Engine(MAXIMUM_FUEL_CAPACITY, _musicPlayer) {
        this._fuel = 0;
        this._miles = 0;
        this._engineStatus = false;
        this.FUEL_MILEAGE = 10;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    Object.defineProperty(Engine.prototype, "miles", {
        get: function () {
            return this._miles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "fuel", {
        //where music used to be
        get: function () {
            return this._fuel;
        },
        enumerable: false,
        configurable: true
    });
    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    Engine.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    Object.defineProperty(Engine.prototype, "engineStatus", {
        get: function () {
            return this._engineStatus;
        },
        enumerable: false,
        configurable: true
    });
    Engine.prototype.turnEngineOn = function () {
        this._engineStatus = true;
    };
    Engine.prototype.turnEngineOff = function () {
        this._engineStatus = false;
    };
    Engine.prototype.drive = function () {
        if (this.engineStatus === false || this._fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    };
    return Engine;
}());
exports.Engine = Engine;
