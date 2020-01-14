const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(port, () => console.log(`App on http://localhost:${port}`))