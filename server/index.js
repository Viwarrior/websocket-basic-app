const http = require('http').createServer()

const io = require('socket.io')(http, {
    cors: { origin: '*' }
});

io.on('connection', (socket) => {
    console.log('new client connected');
    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${message}`)
    });
});

http.listen(8092, () => console.log('server listening on port: http://localhost/8092'));