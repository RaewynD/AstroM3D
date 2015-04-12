var express = require('express');
var app = express();

app.get('/', function(request,response) {
        response.set('Content-Type', 'text/html');
        response.send(index.html);
});

app.listen(process.env.PORT || 3000);
