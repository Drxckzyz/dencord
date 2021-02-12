import EventEmitter from 'https://deno.land/std@0.85.0/node/events.ts';
import Guild from '../models/Guild.ts';
import WebsocketManager from './ws/WebsocketManager.ts';
import ClientUser from './ClientUser.ts';
export default class Client extends EventEmitter {

    private socket: WebsocketManager = new WebsocketManager(this)
    private _user!: ClientUser;
    private _token!: string;
    private _guilds: Map<string, Guild> = new Map();


    async login(token: string){
        this.socket.login(token);
        this._token = token
    }

    get user() {
        return this._user;
    }

    set user(user: ClientUser) {
        this._user = user;
    }

    get token(){
        return this._token;
    }

    get guilds() {
        return this._guilds;
    }
}