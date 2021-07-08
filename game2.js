let bom = document.getElementById("bom");

    bom.onmousedown = function(event){
		console.log("タップされたよ!");
		document.addEventListener("mousemove",onMouseMove);
	}

	bom.ondragstart = function(event){
  		console.log("ドラッグされたよ!");
    }

bom.style.position = "absolute";

let onMouseMove = function(event){
		console.log("ムーブされたよ!");
		let x = event.clientX;
		let y = event.clientY;
		let width = bom.offsetWidth;
		let height = bom.offsetHeight;
		bom.style.top = (y-height/2) + "px";
		bom.style.left = (x-width/2) + "px";
}
