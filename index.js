import RPC from 'discord-rpc'
const richPresence = new RPC.Client({
    transport:'ipc'
})

richPresence.on('ready', () => {
    richPresence.setActivity({
        details: 'This is details',
        state: 'this is state',
        startTimestamp: new Date(),
        largeImageKey: 'unreal',
        largeImageText: 'This is a large image',
        smallImageKey: 'visualstudios',
        smallImageText: 'this is small image',
        buttons: [{
            label: 'This is button 1',
            url: 'https://discord.com/developers/applications/886948968053997598/information'
        },{
           label : 'This is button 2',
           url : 'https://discord.com/developers/applications/886948968053997598/information' 
        }]
    })

    console.log("Client is ready!")
})

richPresence.login({
    clientId: '886576833838088243'
})