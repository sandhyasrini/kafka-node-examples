var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.Client(),
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message'),
    payloads = [
        { topic: 'topic1', messages: 'hi from producer side', partition: 0 },
        { topic: 'topic2', messages: ['hello', 'world','sandhya here', km] }
    ];
producer.on('ready', function() {
    producer.send(payloads, function(err, data) {
        payloads.forEach((payload) => {
            console.log("payload here is", payload.messages);
        });

        console.log("data here is", data);
    });
});

producer.on('error', function(err) {
    console.log(err);
})
