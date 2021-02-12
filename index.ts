const token = 'test token here i guess'

import Client from './src/client/Client.ts';

const client = new Client();


client.on('ready', () => {
    //console.log('Logged in and ready!', client.user);
})

client.on('message', async (msg: any) => {
    console.log(msg);
})

client.on('debug', (data) => {
    console.log(data);
})

client.login(token);