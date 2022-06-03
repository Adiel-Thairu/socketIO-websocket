const express = require('express');
const app = express();
const http =  require('http');
const httpServer = http.Server(app);
const io = require('socket.io')(httpServer,{
    allowEIO3: true

});



app.get('/', (req, res)=> {
    res.send("your express server");
})

app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/Client/client.html');

})

app.get('/test2', (req, res)=>{
    res.sendFile(__dirname + '/Client/client.html');
})

io.on('connection',(socket)=>{
    console.log("User is connected");

    socket.on('message', (data)=>{
        console.log(data);
        socket.broadcast.emit('message', data);
    })

    socket.on('disconnect', ()=>{
        console.log('User Disconnected')
    })
})

httpServer.listen(3000, ()=>{
    console.log("Server is running on the port 3000");
})