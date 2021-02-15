export default class ClientUser {
    constructor(
        private username: string,
        private discriminator: number,
        private verified: boolean,
        private _id: string,
        private flags: number,
        private email: string,
        private bot: boolean,
        private avatar: string,
    ) {
        
    }
    public get id(){
        return this._id; 
    }
}