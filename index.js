var express = require('express')
var app = express()
var port = 80

app.get('/', function (req, res){
	res.send('hello world')
})

app.listen(port, () => console.log('app running on ' + port))