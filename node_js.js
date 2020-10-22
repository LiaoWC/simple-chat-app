// Node.js
const port = process.env.PORT || 3000;
const server = require('http').Server(app).listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

// Socket.io
const io = require('socket.io')(server);