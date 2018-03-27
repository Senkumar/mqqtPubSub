var mqtt = require('mqtt')

client = mqtt.createClient(3000, 'localhost');
client.subscribe('presence');

client.on('message', function(topic, message) {
	console.log(message);
});

console.log('Client subscribed to topic "presence" and listening...');