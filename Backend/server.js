const nconf = require('nconf');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let lodash = require('lodash');
let port = process.env.PORT || 4400;

// Routes
const indexRoute = require('./routes/index');

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', indexRoute);

app.listen(port, '0.0.0.0', () => console.log('server listening on http://localhost:', port));