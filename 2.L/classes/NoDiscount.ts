import {Discount} from "./Discount";
import {InterfaceDiscount} from "./InterfaceDiscount";
export class NoDiscount extends Discount implements InterfaceDiscount{
    constructor(protected _value : number) {
        super(_value)
    }
    apply(price: number): number {
        return price;
    }
    showCalculation(price: number): string {
        return "No discount";
    }
}