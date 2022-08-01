export class Gorilla {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'gorilla';
    }
    public makeSound() : string {
        return "Life's but a walking shadow, a poor player that struts and frets his hour upon the stage and is heard no more. It is a tale told by an idiot, full of sound and fury, signifying nothing.";
    }
}