var express = require("express");
var app = express();
//root is the directory of the web server
//req res
app.get('/', (req, res) => {
	res.send('This is the Homepage');	
});




//take in callback function
//something that happens on a successful response

//post send information from the website to the server
//get retrieve information from web server



//Listening on port 3000
app.listen(3000, ()=> {
	console.log('listening on 3000');
})