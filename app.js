var express = require('express');
var app = express();
var price = require('crypto-price')
app.use(express.static("/"));
let port = process.env.PORT || 8080

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: "/"})
});
app.get('/example_code.sol', function(req, res) {
    res.sendFile('example_code.sol', {root: "/"})
});
app.get('/dist/web3.min.js', function(req, res) {
    res.sendFile('web3.min.js', {root: "/"})
});
app.get('/bnb_price', function(req, res) {
	price.getCryptoPrice("USD", "BNB").then(obj => { // Base for ex - USD, Crypto for ex - ETH 
	res.send(obj.price);
	}).catch(err => {
		console.log(err)
	})
});
app.get('/eth_price', function(req, res) {
	price.getCryptoPrice("USD", "ETH").then(obj => { // Base for ex - USD, Crypto for ex - ETH 
	res.send(obj.price);
	}).catch(err => {
		console.log(err)
	})
	 
    
});

app.listen(port, () => {
    console.log('Server is running at port 3400');
})
