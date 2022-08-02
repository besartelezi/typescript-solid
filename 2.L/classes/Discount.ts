import {InterfaceDiscount} from "./InterfaceDiscount";
export class Discount implements InterfaceDiscount{
    protected _value : number

    constructor(_value : number = 0) {
        this._value = _value;
    }
    apply(price: number): number {
        return price;
    }
    showCalculation(price: number): string {
        return "No specific discount was selected";
    }
}