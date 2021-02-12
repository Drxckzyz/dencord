import Role from "./Role.ts";

export default class Guild {
    constructor(
        private _id: string,
        private name: string,
        private icon: string,
        private description: string,
        private splash: string,
        private discoverySplash: string,
        private features: Array<any>,
        private emojis: Array<any>,
        private banner: string,
        private ownerID: string,
        private applicationID: string,
        private region: string,
        private afkChannelID: string,
        private afkTimeout: number,
        private systemChannelID: string,
        private widgetEnabled: boolean,
        private widgetChannelID: string,
        private verificationLevel: number,
        private roles: Map<string, Role>,
        private defaultMessageNotifications: number,
        private mfaLevel: number,
        private explicitContentFilter: number,
        private MaxPresences: number,
        private MaxMembers: number,
        private MaxVideoChannelUsers: number,
        private vanityUrlCode: string,
        private premiumTier: number,
        private premiumSubscriptionCount: number,
        private SytemChannelFlags: number,
        private preferredLocale: string,
        private rulesChannelID: string,
        private publicUpdatesChannelID: string,
    ){

    }

    get id(): string {
        return this._id;
    }
}