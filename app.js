var express = require('express');
var app = express();

app.register('.html', require('jade'));

app.get('/', function(req,res) {
    res.render('index.html');
});

app.listen(process.env.PORT || 3000);
