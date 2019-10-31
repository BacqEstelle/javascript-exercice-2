
let character = {
	"name" : "Michou",
	"age" : 31 ,
	itemToGive : ["couteau","bois","fer"],
};

let randomItem = character.itemToGive[Math.floor(Math.random()*character.itemToGive.length)];
console.log ("Nom: "+character.name);
console.log ("Age: "+character.age);        
console.log ("Viens de perdre: " +randomItem);

console.log("======================");
console.log("Shop");
console.log("======================");

let shop = [
	{arme:"Couteau", physic:5, magic:0, minLevel:1, available:false},
	{arme:"Hache", physic:15, magic:0, minLevel:5, available:true },
	{arme:"Arc", physic:7, magic:7, minLevel:4, available:false },
	{arme:"Baton Magic", physic:1, magic:15, minLevel:15, available:true},

];
const shopList = () => {
	shop.forEach(arme => {
		console.log(arme)
	});
};

const shopAvailable = () => {
	shop.forEach(arme => {
		if(arme.available = true){
			console.log(arme);
		}
	});

};
const shopLevel = () => {
	shop.forEach(arme => {
		if(arme.minLevel >= 5){
			console.log(arme);
		}
	});
};
shopList();
console.log("=======================");
shopAvailable();
console.log("========================");
shopLevel();

console.log("========================");
console.log("Creation d'un personnage");
console.log("========================");

let mainCharacter = {
	name : "Michou",
	level : 31 ,
	life : 150,
	weapon : {
		name : "Couteau",
		damage : 15,
	},
	attack() {
		const damageAttack = this.level * this.weapon.damage; 
		console.log(mainCharacter.name + " a attaqué, et a infligé " + damageAttack + " a l'ennemi");
	}
	
};
mainCharacter.attack();