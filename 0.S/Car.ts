import {MusicPlayer} from "./MusicPlayer";
import {Engine} from "./Engine";
export class Car {
    private _musicPlayer : MusicPlayer;
    private _engine : Engine;

    constructor(_musicPlayer : MusicPlayer, _engine : Engine) {
        this._musicPlayer = _musicPlayer;
        this._engine = _engine;
    }
}