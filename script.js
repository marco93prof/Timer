function undestakButton( btn ){
	btn.style.backgroundColor = "#DB2E36";
	btn.style.boxShadow = "0 0 5px #DB2E36";
}

function destakButton( btn ){
	btn.style.backgroundColor = "#40c9a5";
	btn.style.boxShadow = "0 0 5px #40c9a5";
}

function playTimer() {
	if( !isTimerOn ){
		
		isTimerOn = true;
		
		timerInterval = setInterval( () => { 
			
			totalSeconds += 1;
			
			let s = totalSeconds % 60;
			let m = Math.floor(totalSeconds / 60) % 60;
			let h = Math.floor(totalSeconds / 3600) % 24;

			let ss = s < 10 ? "0"+s : s; 
			let mm = m < 10 ? "0"+m : m; 
			let hh = h < 10 ? "0"+h : h; 
			
			timer.innerHTML = `${hh}:${mm}:${ss}`;
		
		}, 1000);

		destakButton( playButton );
		undestakButton( pauseButton );
		undestakButton( stopButton );
	}
}

function pauseTimer() {
	isTimerOn = false;
	clearInterval(timerInterval);
	undestakButton( playButton );
	destakButton( pauseButton );
	undestakButton( stopButton );
}

function stopTimer() {
	timer.innerHTML = "00:00:00";
	isTimerOn = false;
	totalSeconds = 0;
	clearInterval(timerInterval);
	undestakButton( playButton );
	undestakButton( pauseButton );
	destakButton( stopButton );
}

///////////////////////////////////////////
// MAIN
///////////////////////////////////////////
var timerInterval;
var isTimerOn = false;
var totalSeconds = 0;

const timer = document.getElementsByClassName("timer")[0];
const playButton = document.getElementsByClassName("playButton")[0];
const pauseButton = document.getElementsByClassName("pauseButton")[0];
const stopButton = document.getElementsByClassName("stopButton")[0];

playButton.addEventListener( "click", playTimer );
pauseButton.addEventListener( "click", pauseTimer );
stopButton.addEventListener( "click", stopTimer );

