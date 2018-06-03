temp = [{ "clean_description": " Don't text while driving as a new study suggests that doing so increases the risk of a crash much more than talking or listening on a mobile phone. ", "category": "health" }
  , { "clean_description": " Don't text while driving as a new study suggests that doing so increases the risk of a crash much more than talking or listening on a mobile phone. ", "category": "health" }
  , { "clean_description": " Don't text while driving as a new study suggests that doing so increases the risk of a crash much more than talking or listening on a mobile phone. ", "category": "health" }]

$(function () {
  var socket = io();
  
  socket.on('msg', function (msg) {
    console.log(msg)
    op = JSON.parse(msg.value)
    messagediv = $('#message')
    var headlines = $("<div>").addClass("col-8")
    var categorydiv = $("<div>").addClass("col-4")
    messagediv.append(headlines.text(op.clean_description));
    messagediv.append(categorydiv.text(op.category));
    // console.log(op)
  });

  // });
});
