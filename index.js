const express = require('express');
const app = express();

app.get('/api/v1/time', (req, res) => {
    const type = req.query.type;

    var current = new Date();
    if (type == '24hour') {
        res.send({ data: current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds() })
    } else {
        res.send({ data: current.toLocaleTimeString() })
    }
});

app.listen (8080, () => console.log('alive on http://localhost:8080'));