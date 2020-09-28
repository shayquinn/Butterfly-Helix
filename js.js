$(function() {
  "use strict";
  var num = 24, i;
  var $elem = $("section.box");
  var pic = 'https://drive.google.com/uc?export=download&id=1Jjr83n8VsO99oc20bj0TH46GETEuCmWV';
  for(i=1;i <= num; i++) {
    $elem.append($("<figure/>", {"id": "f" + i + "", "class": "fig",}));
    var $figure = $("#f" + i + "");
    $figure.append($('<img src="'+pic+'" id="m'+ i +'" class="im"/>'));
    var id = "#m"+i+"";
    $(id).css("-webkit-filter", "hue-rotate("+(360/12)*i+"deg)");
    $(id).css({"Transform": "rotateZ("+ (i-1)*30 + "deg) translateZ(" + -Math.abs((i-1) * 600) + "px)"});
  }});
