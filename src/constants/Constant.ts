export enum Constants {
    GATEWAY = `wss://gateway.discord.gg/?v=8&encoding=json`,
    API = `https://discord.com/api/v8`
}

export enum OPCODES {
    ZERO = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    ELEVEN = 11,
    TWELVE = 12,
}

export enum CLOSEDCODES {
    NOTOKEN = 4004,
}

export enum Endpoints {
    USERS = 'users',
    USERS_GUILDS = 'users/@me/guilds',
    GUILDS = 'guilds'
}

export const headers = {
    'Content-Type': 'application./json',
    'Authorization': '',
}