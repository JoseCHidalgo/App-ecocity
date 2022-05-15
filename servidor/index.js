const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Hola Mundo!</h1>');
});

app.listen(process.env.PORT || 8888, function() {
    console.log('Sevidor en linea', this.address().port, app.settings.env);
});