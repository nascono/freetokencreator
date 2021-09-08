var express = require('express');
var app = express();
var price = require('crypto-price')
app.use(express.static("/"));
let port = process.env.PORT || 8080


app.get('/', function(req, res) {
    res.sendFile(__dirname  +'/html/index.html')
});
app.get('/abd.png', function(req, res) {
    res.sendFile(__dirname +'/html/abd.png')
});
app.get('/donate.html', function(req, res) {
    res.sendFile(__dirname +'/html/donate.html')
});
app.get('/example_code.sol', function(req, res) {
    res.sendFile(__dirname +'/html/example_code.sol')
});
app.get('/index.html', function(req, res) {
    res.sendFile(__dirname  +'/html/index.html')
});
app.get('/ofa.png', function(req, res) {
    res.sendFile(__dirname +'/html/ofa.png')
});
app.get('/Sikkecreatoring.pdf', function(req, res) {
    res.sendFile(__dirname +'/html/Sikkecreatoring.pdf')
});
app.get('/our_team.html', function(req, res) {
    res.sendFile(__dirname +'/html/our_team.html')
});
app.get('/program.html', function(req, res) {
    res.sendFile(__dirname +'/html/program.html')
});
app.get('/sikke512.png', function(req, res) {
    res.sendFile(__dirname +'/html/sikke512.png')
});
app.get('/dist/web3.min.js', function(req, res) {
    res.sendFile(__dirname +'/html/web3.min.js')
});
app.get('/whitepaper.html', function(req, res) {
    res.sendFile(__dirname +'/html/whitepaper.html')
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
