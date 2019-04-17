const nconf = require('nconf');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let lodash = require('lodash');

let port = process.env.PORT || 4420;

// Routes
const indexRoute = require('./routes/index');
const xboxRoute = require('./routes/xbox');
const steamRoute = require('./routes/steam');

nconf.argv({
    'XBOX_KEY': {
        alias: 'xbox-key',
        describe: 'Key for Xbox API',
        demand: false
    }
})
    .env()
    .defaults({
        'XBOX_KEY': 'xxxx'
    });

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/xbox', xboxRoute);
app.use('/steam', steamRoute);

app.listen(port, '0.0.0.0', () => console.log('server listening on http://localhost:' + port));