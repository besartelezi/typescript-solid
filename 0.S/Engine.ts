export class Engine {
    private _fuel : number = 0;
    private _engineStatus: boolean = false;

    private readonly MAXIMUM_FUEL_CAPACITY: number;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

    get fuel(): number {
        return this._fuel;
    }

    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

    get engineStatus(): boolean {
        return this._engineStatus;
    }

    turnEngineOn() {
        this._engineStatus = true;
    }

    turnEngineOff() {
        this._engineStatus = false;
    }

    useFuel() {
        this._fuel -=1;
    }
}