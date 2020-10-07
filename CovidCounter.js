var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var net = document.querySelector("#net");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var nett=0;
var gameOver = false;
var resetButton = document.querySelector("#reset");
//var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		nett++;
		p1Display.textContent = p1Score;
		net.textContent=nett;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		nett--;

		p2Display.textContent = p2Score;
		net.textContent= nett;
		if(p2Score === p1Score){
			alert("Congrats!!! Earth is now Corona free!");
			document.body.classList.add("winner");
		}
	}
});

resetButton.addEventListener("click", function(){
	//resetfun();
	p1Score=0;
	p2Score=0;
	p1Display.textContent=p1Score;
	p2Display.textContent=p2Score;
	nett=0;
	document.body.classList.remove("winner");
});


numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});