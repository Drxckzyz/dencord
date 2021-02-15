import Client from "../../Client.ts";
import { Payload } from "../../../constants/interfaces/Payload.ts";

export default function(client: Client, payload: Payload) {
    
    console.log(payload);
}