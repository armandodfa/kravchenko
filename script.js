let leftOffset = 500;
let moveMain = function () {
     $("#main").offset({ left: leftOffset }); 
     leftOffset++;
if (leftOffset > 1000) {

    leftOffset = 500; }
};
setInterval(moveMain, 30);
var clickHandler = function (event) {
    console.log("Клик! " + event.pageX + " " + event.pageY);
    };
     $("h1").click(clickHandler);
$("html").mousemove(function (event) {
$("#logo_text").offset({
        
left: event.pageX,
top: event.pageY });
});