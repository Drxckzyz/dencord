import { 
    WebSocket 
} from "https://deno.land/x/websocket@v0.0.6/mod.ts";
import Client from "../Client.ts";
import {
    Constants, OPCODES, CLOSEDCODES
} from '../../constants/Constant.ts';
import {
    Heartbeat,
    Identify,
} from '../../constants/Payload.ts';
import {
    Payload
} from '../../constants/interfaces/Payload.ts';
export default class WebsocketManager {

    private socket!: any;
    private interval: any;

    constructor(private client: Client) {

    }

    async login(token: string) {
        this.debugger('[WEBSOCKET] Preparing to connect to the gateway!')
        
        try {
            this.socket = new WebSocket(Constants.GATEWAY);
            
            this.socket.on("message", async (message: string) => {
                const payload: Payload = JSON.parse(message.toString())
           
                const { t: event, op } = payload
                console.log('WEBSOCKET', payload)
                switch (op) {
                    case OPCODES.TEN:
                        const { heartbeat_interval } = payload.d
                        this.debugger(`[HEARTBEAT] Heartbeat recieved!`);
                        this.interval = this.heartbeat(heartbeat_interval)
                        this.identify(token)
                        break;
                    case OPCODES.ELEVEN:
                        this.debugger('[HEARTBEAT] Heartbeat recieved!')
                        break;
                    case OPCODES.ZERO:
                        this.debugger('An event was trigerred!')
                        break;
                }
                if(event) {
                    try {
                        this.debugger(event);
                    const { default: module } = await import(`./handlers/${event}.ts`);
                    module(this.client, payload)
                    } catch(err) {
                        return console.log(`[ERROR] Couldn't find the event ${event} : ${err}`);
                    }
                }
            });
        } catch (err) {
            console.log(err);
            return err;
        }
        this.socket.on("open", () => {
            this.debugger('[WEBSOCKET] Connected to the gateway!')
        })
        this.socket.on('close', (code: number) => {
            console.log(code)
            switch (code) {
                case CLOSEDCODES.NOTOKEN: 
                throw new TypeError('[INVALID TOKEN] An invalid token was provided!')

            }
            //this.debugger(`[WEBSOCKET] The connection to the gateway was closed... Code: ${code}`)
        });
    }
    heartbeat(ms: number) {
        return setInterval(() => {
            this.debugger(`[HEARTBEAT] Sending heartbeat...`)
            this.socket.send(JSON.stringify(Heartbeat));
        }, ms)
    }
    async identify(token: string) {
        Identify.d.token = token;
        this.debugger('[WEBSOCKET] Identifying the client...');
        return this.socket.send(JSON.stringify(Identify))
    }
    async debugger(todebug: string){
        const { default: customdebugger }  = await import('./handlers/DEBUG.ts');

        customdebugger(this.client, todebug)
    }
}