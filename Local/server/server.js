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

        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        const id = req.body.id;
        const adit = req.body.adit;

        //oxygen
        const oxygen = req.body.oxygen;
        const floOxygen = parseFloat(oxygen);
        if
            (floOxygen < 19.5) {
            var lvlOxygen = 'Low';
            var colorOxygen = '#FF1405';
        }
        else {
            var lvlOxygen = 'Normal';
            var colorOxygen = '#39FF14';
        }

        //Co2
        const co2 = req.body.co2;
        const floCo2 = parseFloat(co2);
        if
            (floCo2 > 20.5) {
            var lvlCo2 = 'High';
            var colorCo2 = '#FF1405';
        }
        else {
            var lvlCo2 = 'Normal';
            var colorCo2 = '#39FF14';
        }

        //H2s
        const h2s = req.body.h2s;
        const floH2s = parseFloat(h2s);
        if
            (floH2s > 5) {
            var lvlH2s = 'High';
            var colorH2s = '#FF1405';
        }
        else {
            var lvlH2s = 'Normal';
            var colorH2s = '#39FF14';
        }
        //Co
        const co = req.body.co;
        const floCo = parseFloat(co);
        if
            (floCo > 5) {
            var lvlCo = 'High';
            var colorCo = '#FF1405';
        }
        else {
            var lvlCo = 'Normal';
            var colorCo = '#39FF14';
        }
        //Lpg
        const lpg = req.body.lpg;
        const floLpg = parseFloat(lpg);
        if
            (floLpg > 5) {
            var lvlLpg = 'High';
            var colorLpg = '#FF1405';
        }
        else {
            var lvlLpg = 'Normal';
            var colorLpg = '#39FF14';
        }
        //Methane
        const methane = req.body.methane;
        const floMethane = parseFloat(methane);
        if
            (floMethane > 5) {
            var lvlMethane = 'High';
            var colorMethane = '#FF1405';
        }
        else {
            var lvlMethane = 'Normal';
            var colorMethane = '#39FF14';
        }


        socket.emit('warning', {
            date, time, id, adit,
            oxygen, lvlOxygen, colorOxygen,
            co2, lvlCo2, colorCo2,
            h2s, lvlH2s, colorH2s,
            co, lvlCo, colorCo,
            lpg, lvlLpg, colorLpg,
            methane, lvlMethane, colorMethane,
            co, lpg, methane
        });

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





