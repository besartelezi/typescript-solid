import {Discount} from "./Discount";
import {InterfaceDiscount} from "./InterfaceDiscount";
export class FixedDiscount extends Discount implements InterfaceDiscount{
    constructor(protected _value : number) {
        super(_value)
    }
    apply(price: number): number {
        return Math.max(0, price - this._value);
    }
    showCalculation(price: number): string {
        return price + "€ -  "+ this._value +"€ (min 0 €)";
    }
}