 function bgColors() {
   var container = document.getElementById("container");
   var bgColorName = prompt("Enter Background Color");
   container.style.backgroundColor = bgColorName;
 }

 function textColors() {
   var heading = document.getElementById("heading");
   var para = document.getElementById("para");
   var textColor = prompt("Enter TEXT Color");
   heading.style.color = textColor;
   para.style.color = textColor;
 }