const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const Port = 5000;

app.use(cors());
app.use(express.json());

const io = require('socket.io')(server, {
    cors: { origin: "*" }
});
app.get('/', (req, res, next) => {
    res.send('<h1>Hello world</h1>');
    // res.sendFile(path.join(__dirname,'../client/index.html'));


});
io.on('connection', (socket) => {

    console.log('A Client connected');

    app.post('/alert', (req, res, next) => {

        const now = new Date();
        const time = now.toLocaleTimeString();
        const id = req.body.id;
        const adit = req.body.adit;
        const oxygen = req.body.oxygen;
        const h2s = req.body.h2s;
        const co = req.body.co;
        const lpg = req.body.lpg;

        socket.emit('warning', { time, id, adit, oxygen, h2s, co, lpg });

        res.send(
            'Request Received'
        );


    });
});




server.listen(Port, () => {
    console.log(`Server is running on port: ${Port}`);
});









// const express = require('express');
// const cors = require('cors');
// const http = require('http');


// const app = express();
// const PORT = 8080;
// const server = http.createServer(app);

// app.use(cors());
// app.use(express.json());

// const io = require('socket.io')(server, {
//     cors: { origin: "*" }
// });
// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('message', (message) =>     {
//         console.log(message);
//         io.emit('message', `${socket.id.substr(0,2)} {Gas-Name} detected` );
//     });
// });

// app.get('/', (req, res) => {
//     res.send(`Server is up and running on port ${PORT}`);
// });
// app.post('/alert', (req, res) => {

//     const username = req.body.name;
//     const useremail = req.body.email;

//     res.json({
//         username: username,
//         useremail: useremail
//     });


// });


// app.listen(PORT, () => {
//     console.log(`listening on port ${PORT}`);
// });





