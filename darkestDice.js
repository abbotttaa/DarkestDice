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

// function rollForDamage() {
// 	let d20 = Math.floor(Math.random() * 20) + 1;
// 		if(d20 <= 6){
// 		return "Miss!"
// 	}
// 	else if(d20 === 7){
// 		return "Effect x0.5"
// 	}
// 	else if(d20 === 8){
// 		return "Effect x.0.6"
// 	}
// 	else if(d20=== 9){
// 		return "Effect x0.7"
// 	}
// 	else if(d20 === 10){
// 		return "Effect x0.8"
// 	}
// 	else if(d20 === 11){
// 		return "Effect x0.9"
// 	}
// 	else if(d20 === 12){
// 		return "Effect x1.0"
// 	}	
// 	else if(d20 === 13){
// 		return "Effect x1.1"
// 	}
// 	else if(d20 === 14){
// 		return "Effect x1.2"
// 	}
// 	else if(d20 === 15){
// 		return "Effect x1.3"
// 	}
// 	else if(d20=== 16){
// 		return "Effect x1.4"
// 	}
// 	else if(d20 === 17){
// 		return "Effect x1.5"
// 	}
// 	else if(d20 >= 18){
// 		return "Crit!"
// 	}
// }
//  console.log(rollForDamage())
// function rollD12() {
// 	let d12 = Math.floor(Math.random() * 12) + 1;
// }

// function rollForEncounterType() {
// 	let d10 = Math.floor(Math.random() * 10) + 1;
// 	if(d10===1) {
// 		return "Party Surprise!"
// 	}
// 	else if (d10>=2&&d10<=9){
// 		return "Regular Encounter"
// 	}
// 	else if (d10===10) {
// 		return "Enemies Encounter!"
// 	}
// }

// console.log(rollForEncounterType())

// function checkForAffliction() {
// 	let d8 = Math.floor(Math.random() * 8) + 1;
// 	if(d8 === 1) {
// 		return "Paranoid"
// 		//"The walls close in, the shadows whisper of conspiracy."
// 	}
// 	else if(d8 === 2){
// 		return "Selfish"
// 		//"Self-preservation is paramount, at any cost.""
// 	}
// 	else if(d8 === 3){
// 		return "Irrational"
// 		//"Reeling! Gasping! Taken over the edge, into madness."
// 	}
// 	else if(d8 === 4){
// 		return "Fearful"
// 		//"Fear and frailty finally claim their due..."
// 	}
// 	else if(d8 === 5){
// 		return "Hopeless"
// 		//"There can be no hope in this hell... no hope at all."
// 	}
// 	else if(d8 === 6){
// 		return "Abusive"
// 		//"Frustration, and fury! ...More destructive than a hundred cannons."
// 	}
// 	else if(d8 === 7){
// 		return "Masochistic"
// 		//"Those who covet injury, find it in no short supply."
// 	}
// 	else if(d8 === 8){
// 		return "Lost wallet"
// 		//"A quest to the DMV awaits you Mike."
// 	}
// }	

function heartAttackTrigger() {
	let thumpThump = Math.floor(Math.random() * 3) + 1;
		if(thumpThump === 1 || 2) {
			return (stress = 170)
}
		else if(thumpThump === 3){
			return (healthPoints = 0)
		}



}
function stressCheckTrigger(Stress){

	while(StressStatus !== undefined && Stress >=100){
	//define in a units code, not in here, or global.
		checkForAffliction()
}
	else if(stress >= 200) {
		return heartAttackTrigger()
	}
}



// function rollD6() {
// 	let d6 = Math.floor(Math.random() * 6) + 1;
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


