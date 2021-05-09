'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  server: 'wss://s1.ripple.com' // Public rippled server
});

var account = api.generateAddress();
console.log('generating new account');
console.log('public address: ', account.address);
console.log('secret key: ', account.secret);
