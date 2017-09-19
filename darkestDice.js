"use strict"




// function rollForClass() {
// 	let d8 = (Math.floor(Math.random() * 8) + 1);
// 	if(d8 === 1){
// 		return "Bounty Hunter"
// 	}
// 	else if(d8 === 2) {
// 		return "Crusader"
// 	}
// 	else if(d8 === 3){
// 		return "Grave Robber"
// 	}
// 	else if(d8 === 4){
// 		return "Hellion"
// 	}
// 	else if(d8 === 5){
// 		return "Highwayman"
// 	}
// 	else if(d8 === 6){
// 		return "Jester"
// 	}
// 	else if(d8 === 7){
// 		return "Leper"
// 	}
// 	else if(d8 === 8){
// 		return "Occultist"
// 	}

// }

// console.log(rollD8())

function rollForDamage() {
	let d20 = Math.floor(Math.random() * 20) + 1;
		if(d20 <= 6){
		return "Miss!"
	}
	else if(d20 === 7){
		return "Effect x0.5"
	}
	else if(d20 === 8){
		return "Effect x.0.6"
	}
	else if(d20=== 9){
		return "Effect x0.7"
	}
	else if(d20 === 10){
		return "Effect x0.8"
	}
	else if(d20 === 11){
		return "Effect x0.9"
	}
	else if(d20 === 12){
		return "Effect x1.0"
	}	
	else if(d20 === 13){
		return "Effect x1.1"
	}
	else if(d20 === 14){
		return "Effect x1.2"
	}
	else if(d20 === 15){
		return "Effect x1.3"
	}
	else if(d20=== 16){
		return "Effect x1.4"
	}
	else if(d20 === 17){
		return "Effect x1.5"
	}
	else if(d20 >= 18){
		return "Crit!"
	}
}
 console.log(rollForDamage())
// function rollD12() {
// 	let d1 = Math.floor(Math.random() * 12) + 1;
// }

// function rollD10() {
// 	let d1 = Math.floor(Math.random() * 10) + 1;
// }

// function rollD8() {
// 	let d1 = Math.floor(Math.random() * 8) + 1;
// }

// function rollD6() {
// 	let d1 = Math.floor(Math.random() * 6) + 1;
// }

// function rollForMap() {
// 	let d4 = Math.floor(Math.random() * 4) + 1;
// 	if(d4 === 1){
// 		return "The Ruins"
// 	}
// 	else if(d4 === 2) {
// 		return "The Warrens"
// 	}
// 	else if(d4 === 3){
// 		return "The Weald"
// 	}
// 	else if(d4 === 4){
// 		return "The Cove"
// }


