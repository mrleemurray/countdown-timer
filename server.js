const express = require('express');
app = express();

var user = process.env.USER;
var pass = process.env.PASS;

app.set('port', process.env.PORT || 3000);

if (user && pass) {
    app.use(express.basicAuth(user, pass));
}

const serveStatic = require("serve-static")
const path = require('path');

app.use(serveStatic(path.join(__dirname, 'dist')));
app.listen(app.get('port'), function() {
    console.log('Server listening on port %s', app.get('port'));
});