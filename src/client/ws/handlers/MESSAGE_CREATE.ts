import Client from "../../Client.ts";
import { Payload } from "../../../constants/interfaces/Payload.ts";
import { Events } from "../../../constants/Events.ts";

export default function(client: Client, payload: Payload) {
    
    client.emit(Events.MESSAGE_CREATE);
}