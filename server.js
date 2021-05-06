const express = require('express');
const path = require('path');


const app = express();
app.use('/static', express.static('styling and scripts'))

app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'/digital clock.html'))
});

app.listen(8080);