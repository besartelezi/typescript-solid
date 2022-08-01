import {MusicPlayer} from "./MusicPlayer";
import {Engine} from "./Engine";
export class Car {

    //adding other classes as properties of this class
    private _musicPlayer : MusicPlayer;
    private _engine : Engine;
    private readonly FUEL_MILEAGE: number = 10;
    private _miles : number = 0;

    constructor(_musicPlayer : MusicPlayer, _engine : Engine) {
        this._musicPlayer = _musicPlayer;
        this._engine = _engine;
    }

    get miles(): number {
        return this._miles;
    }

    get engine(): Engine {
        return this._engine;
    }

    get musicplayer(): MusicPlayer {
        return this._musicPlayer;
    }

    drive() {
        if(this._engine.engineStatus === false || this._engine.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        //removes fuel from engine
        this._engine.useFuel();
        //FUEL_MILEAGE needs to increase
        this._miles += this.FUEL_MILEAGE;
    }


}