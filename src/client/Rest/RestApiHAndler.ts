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
}