import Client from "../../Client.ts";
import { Events } from "../../../constants/Events.ts";

export default function(client: Client, payload: string) {

    client.emit(Events.DEBUG, (payload))
}