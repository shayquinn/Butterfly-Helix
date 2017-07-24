
$(function() {
  "use strict";
  var num = 24;
  var $elem = $("section.box");
  var i;
  for(i=1;i <= num; i++) {
    $elem.append($("<figure/>", {
      "id": "f" + i + "",
      "class": "fig",
    }));
    var imm = "";
    if(i<=12){
      imm = i;
    }else{
      imm = i-12;}
    var $figure = $("#f" + i + "");
    $figure.append($('<img src="bf'+ imm +'.gif" id="m'+ i +'" class="im"/>'));
    var id = "#m"+i+"";

    $(id).css({
      "Transform": "rotateZ("+ (i-1)*30 + "deg) translateZ(" + -Math.abs((i-1) * 600) + "px)"
       });

    /*
      var filro = "";
    if(i<12){
      filro = i*30;
    }else{filro = (i-12)*30;}
     $(id).css({
      "Transform": "rotateZ("+ (i-1)*30 + "deg) translateZ(" + -Math.abs((i-1) * 600) + "px)",
       "-webkit-filter": "hue-rotate("+filro+"deg)"});*/

  }

});