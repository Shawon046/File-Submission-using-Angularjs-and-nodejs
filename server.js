const express = require('express');
const path = require('path');


const app = express();
app.use('/static', express.static('final mini moodle'))

app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'final mini moodle/mini moodle.html'))
});

app.listen(8080);