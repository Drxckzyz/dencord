import { Constants, Endpoints, headers } from "../../constants/Constant.ts";

export default class RestApiHandler {
    constructor(){

    }

    static async fetchGuilds(token: string){
        headers.Authorization = `Bot ${token}`
        const response = await fetch(`${Constants.API}/${Endpoints.USERS_GUILDS}`, {
            headers,
        });
        
        
        return response.json();
    }

    static async fetchGuild(token: string, id: string){
        headers.Authorization = `Bot ${token}`
        const response = await fetch(`${Constants.API}/${Endpoints.GUILDS}/${id}`, {
            headers,
        })
       
        return response.json();
    }

    static async CreateSlashCommand(name: string, description: string, options: any, type: number, guildonly: boolean, clientid: string, token: string){
        if(typeof name !== 'string' || !name) {
            throw new TypeError('[ERROR] Slash command name is either missing or is not a string');
        } else if(typeof description !== 'string' || !description) {
            throw new TypeError('[ERROR] Slash command Description is either missing or is not a string')
        } else if(typeof type !== 'number') {
            throw new TypeError('[ERROR] Slach command type is either misiing or is not a number')
        } 
        headers.Authorization = `Bot ${token}`
        const cmdurl = Endpoints.COMMANDS.replace('<my_application_id>', clientid);
        const json = JSON.stringify({
            name: name,
            description: description,
            options: options,
            type: type,
            required: true,
        })
        const response = await fetch(`${Constants.API}/${cmdurl}`, {
            headers,
            method: 'POST',
            body: json,
        })
        return response.json()
    }
}