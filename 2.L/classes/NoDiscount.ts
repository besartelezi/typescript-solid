import {Discount} from "./Discount";
export class NoDiscount extends Discount{
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