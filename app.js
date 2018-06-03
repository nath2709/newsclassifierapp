
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// require('js/news.js')
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static("."));
// app.use(express.static(__dirname + '/public'))
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});

/** io.on('connection', function(socket) .ConsumerGroup
  socket.on('', function(msg) {
    comessagensole.log('message: ' + msg);
  });
}); **/

var options = {
  host: 'zookeeper:2181', // zookeeper host omit if connecting directly to broker (see kafkaHost below)
  kafkaHost: 'localhost:9092', // connect directly to kafka broker (instantiates a KafkaClient)

  fromOffset: 'earliest', // default
};

const consumerGroup = require('./node_modules/kafka-node/lib/consumerGroup');

const group = new consumerGroup(options, 'test');

group.on('message', function(message) {

  io.emit('msg', message);
    // console.log('message: ' + message)
  // op = JSON.parse(message.value)
  console.log('message: ' + message.value)
});
// var kafka = require('kafka-node'),
//     HighLevelConsumer = kafka.HighLevelConsumer,
//     client = new kafka.Client(),
//     consumer = new HighLevelConsumer(
//         client,
//         [
//             { topic: 'testk' }
//         ],
//         {
//             groupId: 'my-group'
//         }
//     );
// consumer.on('message', function (message) {
//     Call our SocketIO function
//      callSockets(io,message);
//       Saving the message is optional but reccomended in case you need it again
//      In production you could write the record directly to your database. But for now we are just going to create an index of files.
//     var fs = require('fs');
//     var key = message.key
//     var seconds = new Date().getTime() / 1000;
//
//      fs.writeFile( __dirname + "/public/river_data/" + key +"/" + seconds + ".json", JSON.stringify(message), function(err) {
//      if(err) {
//          return console.log(err);
//      }
//
//     console.log("message: "+ message);
// });

http.listen(3000, function() {
  console.log('listening on *:3000');
});
