import {Discount} from "./Discount";
import {InterfaceDiscount} from "./InterfaceDiscount";
export class VariableDiscount extends Discount implements InterfaceDiscount{
    constructor(protected _value : number) {
        super(_value)
    }
    apply(price: number): number {
        return (price - (price * this._value / 100));
    }
    showCalculation(price: number): string {
        return price + " € -  "+ this._value +"%";
    }
}