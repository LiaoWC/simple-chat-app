var http = require('http');
var fs = require('fs');
var port = "8000";
// var ip = "192.168.1.63";
var ip = "localhost"
var socket_io = require("socket.io");  //注入socket.io

function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<head><meta charset="utf-8"/></head>');
    fs.readFile('test.html', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.end(data);
    });
}

var server = http.createServer(onRequest).listen(port, ip);

var io = socket_io.listen(server);  // socket.io 注入http ;  當client端呼叫http 時，socket.io 也會啟動

io.sockets.on('connection', function (socket) {

    // 如果有接收到offer 訊息，立即傳送廣播封包，發送offer 訊息給client 端
    socket.on('offer', function (data) {
        socket.broadcast.emit('offer', {sdp: data.sdp});
    });

    // 如果有接收到answer 訊息，立即傳送廣播封包，發送answer 訊息給client 端
    socket.on('answer', function (data) {
        socket.broadcast.emit('answer', {sdp: data.sdp});
    });

    // 如果有接收到ice 訊息，立即傳送廣播封包，發送ice 訊息給client 端
    socket.on('ice', function (data) {
        socket.broadcast.emit('ice', {candidate: data.candidate});
    });

    // 如果有接收到hangup 訊息，立即傳送廣播封包，發送hangup訊息給client 端
    socket.on('hangup', function () {
        socket.broadcast.emit('hangup', {});
    });

});

