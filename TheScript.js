document.addEventListener('DOMContentLoaded', Intailise);

var DoOrDoNot = true
var itemrecord
var colarray = []

var protoBox = {
	TheNo	:	"x",
	Type	:	"Standard, Obnoxious, Unmoveable, Bomb"
}
/*
	Standard
	Obnoxious - won't respond to mouseOver by will move with shifting
	Unmoveable - won't move with mouseOver or shifting
*/
function Intailise(){
	var TheCol = document.getElementById("Col1")
	for (c = 0; c < 10; c++){
		var wrkobj = document.createElement("div")
		wrkobj.appendChild(document.createTextNode("textnode"));
		wrkobj.id = "col" + c;
		wrkobj.className = "thecolai";

		document.getElementById("WorkingSpace").appendChild(wrkobj)

		for (i = 0; i < 10; i++){
			var neuObj = document.createElement("div");
			neuObj.textContent = i;
			neuObj.id = "obj" + c + i;
			neuObj.className = "theboxai";
			wrkobj.appendChild(neuObj);
			(function (obj,col){
				console.log("hi");
				// obj.addEventListener(
				// 	"mouseout",
				// 	function(){DoOrDoNot = true}
				// )
				obj.addEventListener(
					"mouseenter",
					function(){
						TheOnMouseOverScript(obj, col);
					}
				)
			})(neuObj, wrkobj)
		}

		colarray[c] = wrkobj
	}
}
function TheOnMouseOverScript (obj,col){
	console.log("callCounter" + obj.id)
	if (obj.id === itemrecord) {console.log("boobs")}
	else if (DoOrDoNot===true){
		obj.parentNode.removeChild(obj)
		col.appendChild(obj)
		DoOrDoNot=false
	} else {
		console.log("here i am")

		// else {
			DoOrDoNot=true;itemrecord=obj.id
		// }
	}
}
