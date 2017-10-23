//Coded and Programmed by Collin Banks
//use css filter: brightness(125%) to light up the blocks

//get the colors working
const GREEN = 'GREEN';
const RED = 'RED';
const YELLOW = 'YELLOW';
const BLUE = 'BLUE';

let count = 1;
//game sounds
const audOne = new Audio(['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3']);
const audTwo = new Audio(['https://s3.amazonaws.com/freecodecamp/simonSound2.mp3']);
const audThree = new Audio(['https://s3.amazonaws.com/freecodecamp/simonSound3.mp3']);
const audFour = new Audio(['https://s3.amazonaws.com/freecodecamp/simonSound4.mp3']);

//target our boxes
const greenBox = document.querySelector('#box-one');
const redBox = document.querySelector('#box-two');
const blueBox = document.querySelector('#box-three');
const yellowBox = document.querySelector('#box-four');

//arrays to hold values 
let computer = [];
let user = [];

////////////////////////////////////////////////////////////////
//tiles flash slow
function greenSlow(){
	greenBox.style.filter = 'brightness(150%)';
	audOne.play();
	
	setTimeout(function(){
	greenBox.style.filter = 'brightness(100%)';
	}, 700);
}
function redSlow(){
	redBox.style.filter = 'brightness(150%)';
	audTwo.play();
		
	setTimeout(function(){
	redBox.style.filter = 'brightness(100%)';
	}, 700);
}
function blueSlow(){
	blueBox.style.filter = 'brightness(150%)';
	audThree.play();
	
	setTimeout(function(){
	blueBox.style.filter = 'brightness(100%)';
	}, 700);
}
function yellowSlow(){
	yellowBox.style.filter = 'brightness(150%)';
	audFour.play();
	
	setTimeout(function(){
	yellowBox.style.filter = 'brightness(100%)';
	}, 700)
}
////////////////////////////////////////////////////////////////
//tiles flash medium fast
function greenMed(){
	greenBox.style.filter = 'brightness(150%)';
	audOne.play();
	
	setTimeout(function(){
	greenBox.style.filter = 'brightness(100%)';
	}, 500);
}
function redMed(){
	redBox.style.filter = 'brightness(150%)';
	audTwo.play();
		
	setTimeout(function(){
	redBox.style.filter = 'brightness(100%)';
	}, 500);
}
function blueMed(){
	blueBox.style.filter = 'brightness(150%)';
	audThree.play();
	
	setTimeout(function(){
	blueBox.style.filter = 'brightness(100%)';
	}, 500);
}
function yellowMed(){
	yellowBox.style.filter = 'brightness(150%)';
	audFour.play();
	
	setTimeout(function(){
	yellowBox.style.filter = 'brightness(100%)';
	}, 500)
}
////////////////////////////////////////////////////////////////
//tiles flash fast
function greenFast(){
	greenBox.style.filter = 'brightness(150%)';
	audOne.play();
	
	setTimeout(function(){
	greenBox.style.filter = 'brightness(100%)';
	}, 200);
}
function redFast(){
	redBox.style.filter = 'brightness(150%)';
	audTwo.play();
		
	setTimeout(function(){
	redBox.style.filter = 'brightness(100%)';
	}, 200);
}
function blueFast(){
	blueBox.style.filter = 'brightness(150%)';
	audThree.play();
	
	setTimeout(function(){
	blueBox.style.filter = 'brightness(100%)';
	}, 200);
}
function yellowFast(){
	yellowBox.style.filter = 'brightness(150%)';
	audFour.play();
	
	setTimeout(function(){
	yellowBox.style.filter = 'brightness(100%)';
	}, 200)
}

//////////**********GAMEPLAY**********//////////

function gameplay(){
	//empty the user array so we can test it
	user = [];

	document.querySelector('#start').style.filter = 'brightness(125%)';
	const colors = [GREEN, RED, YELLOW, BLUE];
	const nextColor = colors[Math.floor(Math.random() * colors.length)];
	console.log(nextColor);

	document.querySelector('#number-count').innerHTML = 1;

	computer.push(nextColor);
	console.log(computer);

	//this will be used to set the timing interval of code execution
	//between each value in the computer array
	let timerOffset = 0

	if(computer.length < 9){
		computer.forEach(function(element){
			document.querySelector('#number-count').innerHTML = computer.length;

			if(element === GREEN){
				setTimeout(greenSlow, 700 + timerOffset);
				timerOffset += 900;
			} 
			else if(element === RED){
				setTimeout(redSlow, 700 + timerOffset);
				timerOffset += 900;
			} 
			else if(element === BLUE){
				setTimeout(blueSlow, 700 + timerOffset);
				timerOffset += 900;
			} 
			else if(element === YELLOW){
				setTimeout(yellowSlow, 700 + timerOffset);
				timerOffset += 900;
			}
		})
	} 
	else if(computer.length >= 9 && computer.length < 15) {
		computer.forEach(function(element){
			document.querySelector('#number-count').innerHTML = computer.length;

			if(element === GREEN){
				setTimeout(greenMed, 500 + timerOffset);
				timerOffset += 700;
			} 
			else if(element === RED){
				setTimeout(redMed, 500 + timerOffset);
				timerOffset += 700;
			} 
			else if(element === BLUE){
				setTimeout(blueMed, 500 + timerOffset);
				timerOffset += 700;
			} 
			else if(element === YELLOW){
				setTimeout(yellowMed, 500 + timerOffset);
				timerOffset += 700;
			}
		})
	} 
	else if(computer.length >= 0 && computer.length >= 15 && computer.length <= 20) {
		computer.forEach(function(element){
			document.querySelector('#number-count').innerHTML = computer.length;

			if(element === GREEN){
				setTimeout(greenFast, 200 + timerOffset);
				timerOffset += 500;
			} 
			else if(element === RED){
				setTimeout(redFast, 200 + timerOffset);
				timerOffset += 500;
			} 
			else if(element === BLUE){
				setTimeout(blueFast, 200 + timerOffset);
				timerOffset += 500;
			} 
			else if(element === YELLOW){
				setTimeout(yellowFast, 200 + timerOffset);
				timerOffset += 500;
			}
		})
	} 
	else if(computer.length === 21){
		youWin();
	}
}

//Code to be run when user clicks on a tile
function userGameplay(){
	$('#box-one').click(function(){
		greenBox.style.filter = 'brightness(150%)';
		audOne.play();
		user.push(GREEN);

		setTimeout(function(){
			greenBox.style.filter = 'brightness(100%)';
		}, 400);

		if(user.toString() === computer.toString()){
		console.log('values equal');
		setTimeout(gameplay, 800);
		} 

		for(let i = 0; i < computer.length && i < user.length; i++){
			if (user[i] !== computer[i]){
				gameOver();
			}
		}
	})
	$('#box-two').click(function(){
		redBox.style.filter = 'brightness(150%)';
		audTwo.play();
		user.push(RED);

		setTimeout(function(){
			redBox.style.filter = 'brightness(100%)';
		}, 400);

		if(user.toString() === computer.toString()){
		console.log('values equal');
		setTimeout(gameplay, 800);
		} 

		for(let i = 0; i < computer.length && i < user.length; i++){
			if (user[i] !== computer[i]){
				gameOver();
			}
		}
	
	})
	$('#box-three').click(function(){
		blueBox.style.filter = 'brightness(150%)';
		audThree.play();
		user.push(BLUE);

		setTimeout(function(){
			blueBox.style.filter = 'brightness(100%)';
		}, 400);

		if(user.toString() === computer.toString()){
		console.log('values equal');
		setTimeout(gameplay, 800);
		} 

		for(let i = 0; i < computer.length && i < user.length; i++){
			if (user[i] !== computer[i]){
				gameOver();
			}
		}
	})
	$('#box-four').click(function(){
		yellowBox.style.filter = 'brightness(150%)';
		audFour.play();
		user.push(YELLOW);

		setTimeout(function(){
			yellowBox.style.filter = 'brightness(100%)';
		}, 400);

		if(user.toString() === computer.toString()){
		console.log('values equal');
		setTimeout(gameplay, 800);
		} 

		for(let i = 0; i < computer.length && i < user.length; i++){
			if (user[i] !== computer[i]){
				gameOver();
			}
		}
	})
}

function youWin(){
	$('#box-one').html('YO');
	$('#box-two').html('U!');
	$('#box-four').html('WI');
	$('#box-three').html('N!');
	$('#play-again').show();
	$('#stop').hide();
}

function gameOver(){
	$('#stop').hide();
	$('#try-again').show();
	audOne.play();
	audTwo.play();
	audThree.play();
	audFour.play();
	$('#box-one').html('GA');
	$('#box-two').html('ME');
	$('#box-four').html('OV');
	$('#box-three').html('ER');
}

function stopGame(){
	location.reload(true);
}

$('#start').click(function(){
	$('#start').hide();
	$('#stop').show();
	gameplay();
});

$('#stop').click(stopGame);
$('#try-again').click(stopGame);

window.onload = userGameplay();