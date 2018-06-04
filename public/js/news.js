temp = [{ "clean_description": " Don't text while driving as a new study suggests that doing so increases the risk of a crash much more than talking or listening on a mobile phone. ", "category": "Health" }
  , { "clean_description": " Don't text while driving as a new study suggests that doing so increases the risk of a crash much more than talking or listening on a mobile phone. ", "category": "Health" }
  , { "clean_description": " Don't text while driving as a new study suggests that doing so increases the risk of a crash much more than talking or listening on a mobile phone. ", "category": "Health" }]

$(function () {
  var socket = io();
  
  // socket.on('msg', function (msg) {
  //   console.log(msg)
  //   op = JSON.parse(msg.value)
  //   messagediv = $('#message')
  //   var headlines = $("<div>").addClass("col-8")
  //   var categorydiv = $("<div>").addClass("col-4")
  //   messagediv.append(headlines.text(op.clean_description));
  //   messagediv.append(categorydiv.text(op.category));
  //   // console.log(op)
  // });

  // });

  $.each(temp,function(index,data){
  messagediv = $('#message')
    var headlines = $("<div>").addClass("col-8 bg-info")
    var t = headlines.append("p").addClass(" text-white font-italic")
    var categorydiv = $("<div>").addClass("col-4").append("p").addClass(" text-dark font-weight-normal")
    messagediv.append(categorydiv.text(data.category));
    messagediv.append(t.text(data.clean_description));
    
  });
});
