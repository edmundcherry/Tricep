const express = require('express');
//Requiring the express package
const router = express.Router();
//Using the express router function
const GDAX = require("gdax");
const publicClient = new GDAX.PublicClient();

console.log("deez nuts oh tay");

/*const callback = (error, response, data) => {
  if (error)
 	return console.dir(error);

  return console.dir(data);


}
publicClient.getCurrencies(callback);
*/

//-----------------------COINBASE/GDAX------------------------//
const gdaxKey = "";

const gdaxSecret = "";

const passPhrase = "";

const apiURI = 'https://api.pro.coinbase.com';
const authenticatedClient = new GDAX.AuthenticatedClient(gdaxKey, gdaxSecret, passPhrase, apiURI);

const LTC_USD = 'LTC-BTC';
const websocket = new GDAX.WebsocketClient([LTC_USD]);
console.log("hello world");

const websocketCallback = (data) => {

 	if (!(data.type === 'done' && data.reason === 'filled'))

     	return;
 	//console.dir(data.price);
  //console.dir(data.time);
//console.dir(data);

}
websocket.on('message', websocketCallback);


//-------------------------BITTREX--------------------------//


var bittrex = require('node-bittrex-api');
/*
bittrex.options({
  'apikey' : API_KEY,
  'apisecret' : API_SECRET,
});*/




bittrex.getmarkethistory({ market : 'BTC-LTC' }, function( data, err ) {
  console.log( data );
});

module.exports = router;
