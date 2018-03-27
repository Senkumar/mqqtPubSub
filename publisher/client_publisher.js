var mqtt = require('mqtt')

client = mqtt.createClient(3000, 'localhost');

client.subscribe('presence');

console.log('Client publishing data to "presence" topic.');

client.publish('presence', 'Test message 1 ' + Date());

client.end();