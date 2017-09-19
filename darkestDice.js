"use strict"




function rollD8() {
	let d8 = (Math.floor(Math.random() * 8) + 1);
	if(d8 === 1){
		return "Bounty Hunter"
	}
	else if(d8 === 2) {
		return "Crusader"
	}
	else if(d8 === 3){
		return "Grave Robber"
	}
	else if(d8 === 4){
		return "Hellion"
	}
	else if(d8 === 5){
		return "Highwayman"
	}
	else if(d8 === 6){
		return "Jester"
	}
	else if(d8 === 7){
		return "Leper"
	}
	else if(d8 === 8){
		return "Occultist"
	}

}

console.log(rollD8())

// function rollD20() {
// 	var d1 = Math.floor(Math.random() * 20) + 1;
// }

// function rollD12() {
// 	var d1 = Math.floor(Math.random() * 12) + 1;
// }

// function rollD10() {
// 	var d1 = Math.floor(Math.random() * 10) + 1;
// }

// function rollD8() {
// 	var d1 = Math.floor(Math.random() * 8) + 1;
// }

// function rollD6() {
// 	var d1 = Math.floor(Math.random() * 6) + 1;
// }

// function rollD4() {
// 	var d1 = Math.floor(Math.random() * 4) + 1;
// }