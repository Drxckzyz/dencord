export default class Role {


    constructor(
        private _id: string,
        private name: string,
        private color: number,
        private hoist: boolean,
        private posistion: number,
        private permissions: number,
        private mentionable: boolean,
        private managed: boolean,
    ){
        
    }

    public get id(): string {
        return this._id;
    }
}