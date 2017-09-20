"use strict"

let Location;
let Character;
let Enemy;



function battleStart(location,Character,Enemy)
// function rollForClass() {
// 	let d8 = (Math.floor(Math.random() * 8) + 1);
// 	if(d8 === 1){
// 		Character = Bounty Hunter
// 		return Character
// 	}
// 	else if(d8 === 2) {
// 		Character= Crusader
// 		return Character
// 	}
// 	else if(d8 === 3){
// 		Character = Grave Robber
// 		return Character
// 	}
// 	else if(d8 === 4){
// 		Character = Hellion
// 		return Character
// 	}
// 	else if(d8 === 5){
// 		Character = Highwayman
// 		return Character
// 	}
// 	else if(d8 === 6){
// 		Character = Jester
// 		return Character
// 	}
// 	else if(d8 === 7){
// 		Character = Leper
// 		return Character
// 	}
// 	else if(d8 === 8){
// 		Character = Occultist
// 		return Character
// 	}
// }

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
//  console.log()

// function deathsDoorTrigger() {
// 	let d3 = Math.floor(Math.random() * 3) + 1;
// 	if(d3 === 1 || 2)
// 		return "Survived!"
// 	else if (d3 === 3)
// 		return "DEATHBLOW"
//  }

// function checkFoundHallwayObject(Location) {
// 	let d6 = Math.floor(Math.random() * 6) + 1;
// 		if(location === TheRuins) {
// 			if(d6 === 1) {
// 				return "Alchemy Table"
// 			}
// 			else if(d6 === 2) {
// 				return "Altar of Light"
// 			}
// 			else if(d6 === 3) {
// 				return "Bookshelf"
// 			}
// 			else if(d6 === 4) {
// 				return "Confession Booth"
// 			}
// 			else if(d6 === 5) {
// 				return "Decorative Urn"
// 			}
// 			else if(d6 === 6) {
// 				return "Suit of Armor"
// 			}
// 		}
// 		if(location === TheWarrens) {
// 			if(d6 === 1) {
// 				return "Bone Altar"
// 			}
// 			else if(d6 === 2) {
// 				return "Dinner Cart"
// 			}
// 			else if(d6 === 3) {
// 				return "Moonshine Barrel"
// 			}
// 			else if(d6 === 4) {
// 				return "Occult Scrawlings"
// 			}
// 			else if(d6 === 5) {
// 				return "Sacrificial Stone"
// 			}
// 			else if(d6 === 6) {
// 				return "Pile of Bones"
// 			}
// 		}
// 		if(location ===TheWeld) {
// 			if(d6 === 1) {
// 				return "Ancient Coffin"
// 			}
// 			else if(d6 === 2) {
// 				return "Beast Carcass"
// 			}
// 			else if(d6 === 3) {
// 				return "Eerie Spiderweb"
// 			}
// 			else if(d6 === 4) {
// 				return "Mummified Remains"
// 			}
// 			else if(d6 === 5) {
// 				return "Old Tree"
// 			}
// 			else if(d6 === 6) {
// 				return "Shallow Grave"
// 			}
// 		}
// 		if(location === TheCove) {
// 			if(d6 === 1) {
// 				return "Barnacle Crusted Chest"
// 			}
// 			else if(d6 === 2) {
// 				return "Eerie Coral"
// 			}
// 			else if(d6 === 3) {
// 				return "Fish Idol"
// 			}
// 			else if(d6 === 4) {
// 				return "Fish Carcass"
// 			}
// 			else if(d6 === 5) {
// 				return "Giant Oyster"
// 			}
// 			else if(d6 === 6) {
// 				return "Ship's Figurehead"
// 			}
// 		}
// }
function encounterEnemiesLow(location) {
	let d5 = Math.floor(Math.random() * 12) + 1;
		if(location === TheRuins) {
			if(d5 === 1) {
				Enemy = Bone Defender
				return = Enemy
			}
			else if(d5 === 2) {
				Enemy = Bone Courtier
				return = Enemy
			}
			else if(d5 === 3) {
				Enemy = Bone Arbalest
				return = Enemy
			}
			else if(d5 === 4) {
				Enemy = Cultist Brawler
				return = Enemy
			}
			else if(d5 === 5) {
				Enemy = Cultist Acolyte
				return = Enemy
		if(location === TheWarrens) {
			if(d5 === 1) {
				Enemy = Swine Chopper
				return = Enemy
			}
			else if(d5 === 2) {
				Enemy = Swine Slasher
				return = Enemy
			}
			else if(d5 === 3) {
				Enemy = Swine Wretch
				return = Enemy
			}
			else if(d5 === 4) {
				Enemy = Swinetaur
				return = Enemy
			}
			else if(d5 === 5) {
				Enemy = Carrion Eater
				return = Enemy
		if(location === TheWeld) {
			if(d5 === 1) {
				Enemy = Rabid Gnasher
				return = Enemy
			}
			else if(d5 === 2) {
				Enemy = Fungal Scratcher
				return = Enemy
			}
			else if(d5 === 3) {
				Enemy = Fungal Artillery
				return = Enemy
			}
			else if(d5 === 4) {
				Enemy = Crone
				return = Enemy
			}
			else if(d5 === 5) {
				Enemy = Madman
				return = Enemy
		if(location === TheCove) {
			if(d5 === 1) {
				Enemy = Pelagic Grouper
				return = Enemy
			}
			else if(d5 === 2) {
				Enemy = Pelagic Shaman
				return = Enemy
			}
			else if(d5 === 3) {
				Enemy = Pelagic Guardian
				return = Enemy
			}
			else if(d5 === 4) {
				Enemy = Sea Maggot
				return = Enemy
			}
			else if(d5 === 5) {
				Enemy = Deep Stinger
				return = Enemy
}


function rollForHallwayEncounter() {
	let d12 = Math.floor(Math.random() * 12) + 1;
	if(d12>=2) {
		return "no encounter"
	}
	else if(d12 === 3 || 4) {
		return (foundHallwayObject())
	}
	else if(d12 === 5 || 6 || 7) {
		return (encounterEnemiesLow)
	}
	else if(d12 === 8 || 9 || 10) {
		return (encounterEnemiesMed())
	}
	else if(d12 === 12) {
		return (encounterEnemiesHigh())
	}
}
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

// let stress = prompt("#")
// let healthPoints = prompt("#")

// function heartAttackTrigger() {
// 	let d3 = Math.floor(Math.random() * 3) + 1;
// 		if(d3 === 1 || 2) {
// 			return (stress = 170)
// }
// 		else if(d3 === 3) {
// 			return (hitPoints = 0)
// }
// 		else if (thumpThump === 3 && hitPoints === 0) {
// 			return "DEATHBLOW"
// }
// }

// }
// function stressCheckTrigger(Stress){

// 	while(StressStatus !== undefined && Stress >=100){
// 	//define in a units code, not in here, or global.
// 		checkForAffliction()
// }
// 	else if(stress >= 200) {
// 		return heartAttackTrigger()
// 	}
// }

// function rollD6() {
// 	let d6 = Math.floor(Math.random() * 6) + 1;
// }

// function rollForMap(Location) {
// 	let d4 = Math.floor(Math.random() * 4) + 1;
// 	if(d4 === 1){
// 		 Location = TheRuins
// 		return Location;
// 	}
// 	else if(d4 === 2) {
// 		 Location = TheWarrens
// 		return Location;
// 	}
// 	else if(d4 === 3){
// 		 Location = TheWeld
// 		return Location;
// 	}
// 	else if(d4 === 4){
// 		 Location = TheCove
// 		return Location;
		
// }


