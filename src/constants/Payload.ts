export const Heartbeat = {
    op: 1,
    d: null,
}

export const Identify = {
    op: 2,
    d: {
        token: '',
        intents: 0,
        properties: {
            $os: 'linux',
            $browser: 'jscord',
            $device: 'jscord'
        }
    }
}