
// var name = "Elliot"; var age = 25;
// console.log(`My name is ${name} and age is ${age}; `);
const EventHandler = require('events');
const emmiter = new EventHandler();

emmiter.on('messenger', function(argc){
	console.log('Hello friend !', argc);
});

emmiter.emit('messenger', {id: 8200, msg: 'Device compromised!'});
