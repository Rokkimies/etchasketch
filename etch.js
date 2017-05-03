$(document).ready(function(){

  for (var i = 0; i< 16; i++){
    var row = $("<div id='table-row'></div>").appendTo("#wrapper");

    for(var x = 0; x< 16; x++){
      $("<div id='pixel'></div>").appendTo(row);
    }
  }

  $("div#pixel").mouseenter(function(){
    $(this).css("background-color","white");
  });
});
