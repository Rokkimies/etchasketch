var size = 16;

$(document).ready(function(){
draw(size);
});


function refresh(){
  var ask = true;
  while(ask){
    size = askSquares();
    if(!isNaN(size)){
      ask = false;}}

    $(".pixel").each(function(){
      $(this).remove();})

    $(".table-row").each(function(){
      $(this).remove();})
    draw(size);
};

function draw(size){
var dia = 300/size;
  for (var i = 0; i< size; i++){
    var row = $("<div class='table-row'></div>").css("height", dia).appendTo("#etchWrapper");
    for(var x = 0; x< size; x++){
      $("<div class='pixel'></div>").css("height", 300/size).css("width", dia).appendTo(row);}}

  $("div.pixel").mouseenter(function(){
    $(this).css("background-color","green");})
  };

function askSquares(){
  return prompt("How many squares per side");
};
