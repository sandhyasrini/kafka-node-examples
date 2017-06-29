var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.Client(),
    producer = new HighLevelProducer(client),
    payloads = [
        { topic: 'topic1', messages: 'hiworld' },
        { topic: 'topic2', messages: ['helloo', 'worldd'] }
    ];
producer.on('ready', function() {
    producer.send(payloads, function(err, data) {
        payloads.forEach((payload) => {
            console.log("payload here is", payload.messages);
        });
        console.log(data);
    });
});
producer.on('error', function(err) {
    console.log(err);
})
