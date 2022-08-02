//Interfaces cannot have properties
//All methods must be public
//All methods must be abstract
export interface InterfaceDiscount {
    apply(price : number) : number
    showCalculation(price : number) : string
}