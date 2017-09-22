"use strict"

let stage;
let enemy;
let attackOne;
let attackTwo;
let Character;

function characterGenerator(hp, atk1, atk2, callback){
let character = {
	hitPoints = hp;
	attackOne = atk1;
	attackTwo = atk2;
	status = [];
	specialAttack = callback;


}
return Character;
}
var myChar = characterGenerator(25, 7, 3, BleedAttack);
myChar.specialAttack();

let bountyHunter = {
	hitPoints: 25,
	attackOne: 7,
	attackTwo: 3, //stun
}
let crusader = {
	hitPoints: 33,
	attackOne: 8,
	attackTwo: 0, //protect self
}
let graverobber = {
	hitPoints: 20,
	attackOne: 4,
	attackTwo: 5, //blight
}
let hellion = {
	hitPoints: 26,
	attackOne: 7,
	attackTwo: 4, //bleed
}
let highwayman = {
	hitPoints: 23,
	attackOne: 7,
	attackTwo: 2, //bleed,
}
let jester = {
	hitPoints: 19,
	attackOne: 5,
	attackTwo: 15, //stress heal
}
let leper = {
	hitPoints: 35,
	attackOne: 10,
	attackTwo: 0, // self heal
}
let occultist = {
	hitPoints: 19,
	attackOne: 5,
	attackTwo: 0, //roll to heal
}

let boneDefender = {
	hitPoints: 10,
	attackOne: 3,
}
let boneCourtier = {
	hitPoints: 10,
	attackOne: 2, //stress +15
}
let boneArbalest = {
	hitPoints: 15,
	attackOne: 2, //stun
	attackTwo: 4,

}
let cultistBrawler = {
	hitPoints: 15,
	attackOne: 6,
}
let cultistAcolyte = {
	hitPoints: 13,
	attackOne: 1, //stress
}
let swineChopper = {
	hitPoints: 21,
	attackOne: 4,
}
let swineSlasher = {
	hitPoints: 8,
	attackOne: 4,
}
let swineWretch = {
	hitPoints: 12,
	attackOne: 1, //stress
}
let swinetaur = {
	hitPoints: 40,
	attackOne: 7,
}
let carrionEater = {
	hitPoints: 9,
	attackOne: 1, //blight
}
let rabidGnasher = {
	hitPoints: 10,
	attackOne: 2, //bleed
}
let fungalScratcher = {
	hitPoints: 19,
	attackOne: 3,
}
let fungalArtillery = {
	hitPoints: 17,
	attackOne: 2, //blight
}
let crone = {
	hitPoints: 18,
	attackOne: 3, //stress
}
let madman = {
	hitPoints: 14,
	attackOne: 1, //stress
}
let pelagicGrouper = {
	hitPoints:14,
	attackOne: 5,
}
let pelagicShaman = {
	hitPoints:14,
	attackOne: 3, //stress
}
let pelagicGuardian = {
	hitPoints: 35,
	attackOne: 5,
}
let seaMaggot = {
	hitPoints: 25,
	attackOne: 2, //bleed
	attackTwo: 2, //blight
}
let deepStinger = {
	hitPoints: 10,
	attackOne: 4, // stun
	attackTwo: 3, //bleed
}

statusArray = ["Blighted", "Bleeding", "Stunned", "Deathsdoor", "Protection"]

function BlightedAttack() {
	if(status !== "Blighted")
		status = "Blighted"
}

function BlightDoT() {
	if(status === "Blighted")
		hitpoints-2
}
function BleedAttack() {
	if(status !== "bleeding")
		status = "Bleeding"
}

function BleedDoT() {
	if(status === "bleeding")
		hitpoints-2
}
function stunningAttack() {
	if(status !== "stunned")
		status = "stunned"
}
function Stunned() {
	if(status === "Stunned")
		//stay stunned this turn then remove stun
}
function protection() {
	if(status !== "protected")
		status = "protected"
}
function protection() {
	if(status === "protected")
		Damagetaken*.25
}

		



alert("Ruin has come to this family")

window.alert("Welcome, to the Darkest Dice.  You'll need to assemble a party of four to make your way to the dungeon.")

window.alert("Roll four times to assemble a team.") 
	let teamSlot1 = rollForClass()
	let teamSlot2 = rollForClass()
	let teamSlot3 = rollForClass()
	let teamSlot4 = rollForClass()
	console.log(teamSlot1)
	console.log(teamSlot2)
	console.log(teamSlot3)
	console.log(teamSlot4)

window.alert("Now we must chose what dungeon to explore.")
window.alert("Roll for your quest location") 
	stage = rollForMap()
	console.log(stage)

window.alert("The rules are simple. Slay as many monsters you find, and gather as much loot as your arms can carry. Your adventure ends when you have no more heroes to fight, but be warned, death may be the least of your concern here.  Madness lurks these halls, and no man leaves unscathed.")

window.alert("Darkest Dice is turn based.  You will take turns with the monsters to move on. Avoid letting your Hitpoints reach zero. Stress is equally important. If your hero reaches the point of insanity, be prepaired to deal with it's consequences.")

window.alert("Now ready yourself! as we decent into.....")

window.alert("THE DARKEST DUNGEON")


// function combat(stage,Character,Enemy) 



function rollForClass() {
	let d8 = (Math.floor(Math.random() * 8) + 1);
	if(d8 === 1){
		Character = bountyHunter
		return Character
	}
	else if(d8 === 2) {
		Character= characterGenerator(25, 7, 6, protection);
		return Character
	}
	else if(d8 === 3){
		Character = characterGenerator(34,4,8,BlightedAttack)
		return Character
	}
	else if(d8 === 4){
		Character = hellion
		return Character
	}
	else if(d8 === 5){
		Character = highwayman
		return Character
	}
	else if(d8 === 6){
		Character = jester
		return Character
	}
	else if(d8 === 7){
		Character = leper
		return Character
	}
	else if(d8 === 8){
		Character = occultist
		return Character
	}
}

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

// function deathsDoorTrigger() {
// 	let d3 = Math.floor(Math.random() * 3) + 1;
// 	if(d3 === 1 || 2)
// 		return "Survived!"
// 	else if (d3 === 3)
// 		return "DEATHBLOW"
//  }



// function checkFoundHallwayObject(stage) {
// 	let d6 = Math.floor(Math.random() * 6) + 1;
// 		if(stage === "TheRuins") {
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
// 		if(stage === "TheWarrens") {
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
// 		if(stage ==="TheWeld") {
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
// 		if(stage === "TheCove") {
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

// function encounterEnemiesLow(stage) {
// 	let d5 = Math.floor(Math.random() * 12) + 1;
// 		if(stage === "TheRuins") {
// 			if(d5 === 1) {
// 				Enemy = boneDefender
// 				return = Enemy
// 			}
// 			else if(d5 === 2) {
// 				Enemy = boneCourtier
// 				return = Enemy
// 			}
// 			else if(d5 === 3) {
// 				Enemy = boneArbalest
// 				return = Enemy
// 			}
// 			else if(d5 === 4) {
// 				Enemy = cultistBrawler
// 				return = Enemy
// 			}
// 			else if(d5 === 5) {
// 				Enemy = cultistAcolyte
// 				return = Enemy
// 		if(stage === "TheWarrens") {
// 			if(d5 === 1) {
// 				Enemy = SwineChopper
// 				return = Enemy
// 			}
// 			else if(d5 === 2) {
// 				Enemy = swineSlasher
// 				return = Enemy
// 			}
// 			else if(d5 === 3) {
// 				Enemy = swineWretch
// 				return = Enemy
// 			}
// 			else if(d5 === 4) {
// 				Enemy = swinetaur
// 				return = Enemy
// 			}
// 			else if(d5 === 5) {
// 				Enemy = carrionEater
// 				return = Enemy
// 		if(stage === "TheWeld") {
// 			if(d5 === 1) {
// 				Enemy = rabidGnasher
// 				return = Enemy
// 			}
// 			else if(d5 === 2) {
// 				Enemy = fungalScratcher
// 				return = Enemy
// 			}
// 			else if(d5 === 3) {
// 				Enemy = fungalArtillery
// 				return = Enemy
// 			}
// 			else if(d5 === 4) {
// 				Enemy = crone
// 				return = Enemy
// 			}
// 			else if(d5 === 5) {
// 				Enemy = madman
// 				return = Enemy
// 		if(stage === "TheCove") {
// 			if(d5 === 1) {
// 				Enemy = pelagicGrouper
// 				return = Enemy
// 			}
// 			else if(d5 === 2) {
// 				Enemy = pelagicShaman
// 				return = Enemy
// 			}
// 			else if(d5 === 3) {
// 				Enemy = pelagicGuardian
// 				return = Enemy
// 			}
// 			else if(d5 === 4) {
// 				Enemy = seaMaggot
// 				return = Enemy
// 			}
// 			else if(d5 === 5) {
// 				Enemy = deepStinger
// 				return = Enemy
// }


// function rollForHallwayEncounter() {
// 	let d12 = Math.floor(Math.random() * 12) + 1;
// 	if(d12>=2) {
// 		return "no encounter"
// 	}
// 	else if(d12 === 3 || 4) {
// 		return (foundHallwayObject())
// 	}
// 	else if(d12 === 5 || 6 || 7) {
// 		return (encounterEnemiesLow())
// 	}
// 	else if(d12 === 8 || 9 || 10) {
// 		return (encounterEnemiesMed())
// 	}
// 	else if(d12 === 12) {
// 		return (encounterEnemiesHigh())
// 	}
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

function checkForAffliction() {
	let d8 = Math.floor(Math.random() * 8) + 1;
	if(d8 === 1) {
		return "Paranoid"
		//"The walls close in, the shadows whisper of conspiracy."
	}
	else if(d8 === 2){
		return "Selfish"
		//"Self-preservation is paramount, at any cost.""
	}
	else if(d8 === 3){
		return "Irrational"
		//"Reeling! Gasping! Taken over the edge, into madness."
	}
	else if(d8 === 4){
		return "Fearful"
		//"Fear and frailty finally claim their due..."
	}
	else if(d8 === 5){
		return "Hopeless"
		//"There can be no hope in this hell... no hope at all."
	}
	else if(d8 === 6){
		return "Abusive"
		//"Frustration, and fury! ...More destructive than a hundred cannons."
	}
	else if(d8 === 7){
		return "Masochistic"
		//"Those who covet injury, find it in no short supply."
	}
	else if(d8 === 8){
		return "Lost wallet"
		//"A quest to the DMV awaits you Mike."
	}
}	

function checkForVirtue() {
	let d5 = Math.floor(Math.random() * 5) + 1;
	if(d5 === 1) {
		StressStatus = Powerful
		return StressStatus
	}
	else if(d5 === 2) {
		StressStatus = Courageous
		return StressStatus
	}
	else if(d5 === 3) {
		StressStatus = Stalwart
		return StressStatus
	}
	else if(d5 === 4) {
		StressStatus = Vigorous
		return StressStatus
	}
	else if(d5 === 5) {
		StressStatus = Focused
		return StressStatus
	}
let stress = prompt("#")
let healthPoints = prompt("#")

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

// function rollForStressStatus() {
// 	let d4 = Math.florr(Math.random() * 4) +1;
// 	if(d4 <= 3)
// 		checkForAffliction()
// 	if(d4 = 4)
// 		checkForVirtue()
// }

// }
// function stressCheckTrigger(Stress){

// 	while(StressStatus !== undefined && Stress >=100){
// 	//define in a units code, not in here, or global.
// 		rollForStressStatus()
// }
// 	else if(stress >= 200) {
// 		return heartAttackTrigger()
// 	}
// }

// function rollD6() {
// 	let d6 = Math.floor(Math.random() * 6) + 1;
// }

function rollForMap() {
	let d4 = Math.floor(Math.random() * 4) + 1;
	if(d4 === 1){
		 stage = "TheRuins"
		return stage;
	}
	else if(d4 === 2) {
		 stage = "TheWarrens"
		return stage;
	}
	else if(d4 === 3){
		 stage ="TheWeld"
		return stage;
	}
	else if(d4 === 4){
		 stage = "TheCove"
		return stage;		
	}
}

