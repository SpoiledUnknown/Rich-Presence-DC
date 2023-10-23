const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on('ready', async() => {
    
    rpc.setActivity({
        details: 'This is details',
        state: 'this is state',
        largeImageKey: 'unreal',
        largeImageText: 'This is a large image',
        smallImageKey: 'unity',
        smallImageText: 'this is small image',
        startTimestamp: new Date(),
        buttons: [{
            label: 'This is b1',
            url: 'https://discord.com/developers/applications/886948968053997598/information'
        },{
           label : 'This is b2',
           url : 'https://discord.com/developers/applications/886948968053997598/information' 
        }]
    })
    console.log('Client is ready')
})

rpc.login({
    clientId: 'YOur client ID Goes here'
})