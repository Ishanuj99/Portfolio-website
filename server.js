const express = require('express');

const log = console.log;
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.post('/email', (req, res) => {
    //Send an email here but currently dummy email
    console.log('Data:', req.body);
    res.json({message: 'Message received!'})
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(PORT, () => log('Server is starting on PORT,', 8080));